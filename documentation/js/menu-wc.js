'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">true</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-5fafdeb89839030cc575b1b3d66612c66a53243c4f4fbbe9c0625794c7097ec57eb5562878e935b0ec2f831decb303beb1665db0a7b6fe2ecd69263eeb12efba"' : 'data-target="#xs-controllers-links-module-AppModule-5fafdeb89839030cc575b1b3d66612c66a53243c4f4fbbe9c0625794c7097ec57eb5562878e935b0ec2f831decb303beb1665db0a7b6fe2ecd69263eeb12efba"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5fafdeb89839030cc575b1b3d66612c66a53243c4f4fbbe9c0625794c7097ec57eb5562878e935b0ec2f831decb303beb1665db0a7b6fe2ecd69263eeb12efba"' :
                                            'id="xs-controllers-links-module-AppModule-5fafdeb89839030cc575b1b3d66612c66a53243c4f4fbbe9c0625794c7097ec57eb5562878e935b0ec2f831decb303beb1665db0a7b6fe2ecd69263eeb12efba"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-5fafdeb89839030cc575b1b3d66612c66a53243c4f4fbbe9c0625794c7097ec57eb5562878e935b0ec2f831decb303beb1665db0a7b6fe2ecd69263eeb12efba"' : 'data-target="#xs-injectables-links-module-AppModule-5fafdeb89839030cc575b1b3d66612c66a53243c4f4fbbe9c0625794c7097ec57eb5562878e935b0ec2f831decb303beb1665db0a7b6fe2ecd69263eeb12efba"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5fafdeb89839030cc575b1b3d66612c66a53243c4f4fbbe9c0625794c7097ec57eb5562878e935b0ec2f831decb303beb1665db0a7b6fe2ecd69263eeb12efba"' :
                                        'id="xs-injectables-links-module-AppModule-5fafdeb89839030cc575b1b3d66612c66a53243c4f4fbbe9c0625794c7097ec57eb5562878e935b0ec2f831decb303beb1665db0a7b6fe2ecd69263eeb12efba"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CategoryModule-dfd96fe5dfed191fd126006c3e6105ddc59459954e557e6006bcc6a02e85e6ef01c90727efc554b456efef7df3238f3f46a07424a8b43642b8492d1a524639be"' : 'data-target="#xs-controllers-links-module-CategoryModule-dfd96fe5dfed191fd126006c3e6105ddc59459954e557e6006bcc6a02e85e6ef01c90727efc554b456efef7df3238f3f46a07424a8b43642b8492d1a524639be"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryModule-dfd96fe5dfed191fd126006c3e6105ddc59459954e557e6006bcc6a02e85e6ef01c90727efc554b456efef7df3238f3f46a07424a8b43642b8492d1a524639be"' :
                                            'id="xs-controllers-links-module-CategoryModule-dfd96fe5dfed191fd126006c3e6105ddc59459954e557e6006bcc6a02e85e6ef01c90727efc554b456efef7df3238f3f46a07424a8b43642b8492d1a524639be"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductModule-c29bf359a547f1c39ccce66ef99bcecf54a4d99175f3d7437a7dac84879d70295766c21becec254c4764b7e8eef0b4b034df33323d294b34491c9db9e60cdb15"' : 'data-target="#xs-controllers-links-module-ProductModule-c29bf359a547f1c39ccce66ef99bcecf54a4d99175f3d7437a7dac84879d70295766c21becec254c4764b7e8eef0b4b034df33323d294b34491c9db9e60cdb15"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-c29bf359a547f1c39ccce66ef99bcecf54a4d99175f3d7437a7dac84879d70295766c21becec254c4764b7e8eef0b4b034df33323d294b34491c9db9e60cdb15"' :
                                            'id="xs-controllers-links-module-ProductModule-c29bf359a547f1c39ccce66ef99bcecf54a4d99175f3d7437a7dac84879d70295766c21becec254c4764b7e8eef0b4b034df33323d294b34491c9db9e60cdb15"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-c29bf359a547f1c39ccce66ef99bcecf54a4d99175f3d7437a7dac84879d70295766c21becec254c4764b7e8eef0b4b034df33323d294b34491c9db9e60cdb15"' : 'data-target="#xs-injectables-links-module-ProductModule-c29bf359a547f1c39ccce66ef99bcecf54a4d99175f3d7437a7dac84879d70295766c21becec254c4764b7e8eef0b4b034df33323d294b34491c9db9e60cdb15"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-c29bf359a547f1c39ccce66ef99bcecf54a4d99175f3d7437a7dac84879d70295766c21becec254c4764b7e8eef0b4b034df33323d294b34491c9db9e60cdb15"' :
                                        'id="xs-injectables-links-module-ProductModule-c29bf359a547f1c39ccce66ef99bcecf54a4d99175f3d7437a7dac84879d70295766c21becec254c4764b7e8eef0b4b034df33323d294b34491c9db9e60cdb15"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoryController.html" data-type="entity-link" >CategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Category.html" data-type="entity-link" >Category</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Product.html" data-type="entity-link" >Product</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateCatoegoryDto.html" data-type="entity-link" >CreateCatoegoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCatoegoryDto.html" data-type="entity-link" >UpdateCatoegoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});