class AppDrawer extends HTMLElement {
    static get is() {
        return 'app-drawer';
    }

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="components/app-drawer/app-drawer.css">
            <div class="backdrop"></div>
            <div class="content">
                <slot></slot>
            </div>
        `;

        this._touchStartX = null;
        this._touchStartY = null;
        this._touchEndX = null;
        this._touchEndY = null;
        this._isScrollEvent = null;
        this._isSlideEvent = null;
        this._slideDirection = null;

        this.elements = {
            backdrop: this.shadow.querySelector('.backdrop'),
            content: this.shadow.querySelector('.content')
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
    }

    connectedCallback() {
        this.addEventListener('touchstart', this.handleTouchStart, false);
        this.elements.backdrop.addEventListener('click', this.handleClick);
        document.addEventListener('keydown',this.handleKeyDown);
    }

    disconnectedCallback() {
        this.removeEventListener('touchstart', this.handleTouchStart);
        this.elements.backdrop.removeEventListener('click', this.handleClick);
        document.removeEventListener('keydown',this.handleKeyDown);
    }

    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
        if (attributeName === 'open') {
            //document.body.style.overflow = this.open ? 'hidden' : '';

            if (this.hasAttribute('aria-hidden')) {
                this.setAttribute('aria-hidden', !this.hasAttribute('open'));
            }
        }
    }

    static get observedAttributes() {
        return ['open'];
    }

    show() {
        this.setAttribute('open');
    }

    hide() {
        this.removeAttribute('open');
    }

    toggle() {
        if (this.hasAttribute('open')) {
            this.removeAttribute('open');
        }
        else {
            this.setAttribute('open');
        }
    }

    handleKeyDown(event) {
        if (event.which === 27) {
            this.hide();
        }
    }

    handleClick() {
        this.hide();
    }

    handleTouchStart(event) {
        const { pageX, pageY } = event.touches[0];
        this._touchStartX = pageX;
        this._touchStartY = pageY;

        this.addEventListener('touchmove', this.handleTouchMove, false);
        this.addEventListener('touchend', this.handleTouchEnd);
    }

    handleTouchMove(event) {
        const { content, backdrop } = this.elements;
        const { pageX, pageY } = event.touches[0];

        this._slideDirection = pageX > this._touchEndX ? 'right' : 'left';
        this._touchEndX = pageX;
        this._touchEndY = pageY;

        if (!this._isScrollEvent && !this._isSlideEvent) {
            const differenceY = Math.abs(this._touchEndY - this._touchStartY);
            const differenceX = Math.abs(this._touchEndX - this._touchStartX);

            this._isScrollEvent = differenceY >= differenceX;
            this._isSlideEvent = !this._isScrollEvent;
        }

        if (this._isSlideEvent) {
            const contentWidth = content.getBoundingClientRect().width;
            const offset = this._touchEndX - this._touchStartX;

            backdrop.style.transition = 'none';
            backdrop.style.opacity = Math.min(1, Math.max(0, 1 - offset * -1 / contentWidth));
            content.style.transition = 'none';
            content.style.transform = `translateX(${Math.min(0, offset)}px)`;

            event.preventDefault();
        }
    }

    handleTouchEnd(event) {
        const { content, backdrop } = this.elements;

        backdrop.style.transition = '';
        backdrop.style.opacity = '';
        content.style.transition = '';
        content.style.transform = '';

        if (this._slideDirection === 'left' && this._isSlideEvent) {
            this.hide();
        }

        this._isSlideEvent = null;
        this._isScrollEvent = null;
        this._slideDirection = null;

        this.removeEventListener('touchmove', this.handleTouchMove);
        this.removeEventListener('touchend', this.handleTouchEnd);
    }
}

window.customElements.define(AppDrawer.is, AppDrawer);