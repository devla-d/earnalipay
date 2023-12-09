<template>
    <footer>
        <!-- footer content begin -->
        <div class="uk-section uk-section-primary uk-padding-large uk-padding-remove-horizontal uk-margin-medium-top">
            <div class="uk-container">
                <div class="uk-child-width-1-2@s uk-child-width-1-5@m uk-flex" data-uk-grid>
                    <div>
                        <h4 class="uk-heading-bullet">Overview</h4>
                        <ul class="uk-list uk-link-text">
                            <li><a href="#">Stock indices</a></li>
                            <li><a href="#">Commodities</a></li>
                            <li><a href="#">Forex</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="uk-heading-bullet">Company</h4>
                        <ul class="uk-list uk-link-text">
                            <li>
                                <router-link to="/about">About</router-link>
                            </li>
                            <li>
                                <router-link to="/roadmap">Roadmap</router-link>
                            </li>
                            <li>
                                <router-link to="/customer">Customer</router-link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="uk-heading-bullet">Legal</h4>
                        <ul class="uk-list uk-link-text">
                            <li>
                                <router-link to="/faq">Faq</router-link>
                            </li>

                            <li>
                                <router-link to="/contact">Support</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="uk-visible@m">
                        <h4 class="uk-heading-bullet">Support</h4>
                        <ul class="uk-list uk-link-text">
                            <li><a href="#">Documentation</a></li>
                        </ul>
                    </div>
                    <div class="uk-flex-first uk-flex-last@m">
                        <ul class="uk-list uk-link-text">
                            <li>
                                <img class="uk-margin-small-bottom" src="@/assets/images/logoii.png" alt="logo"
                                    width="130" height="36" data-uk-img />
                            </li>
                            <li>
                                <a href="#"><i class="fas fa-envelope uk-margin-small-right"></i>info@earnalipay.org</a>
                            </li>
                            <li>
                                <a href="#"><i class="fas fa-map-marker-alt uk-margin-small-right"></i>Wales,
                                    England</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="uk-grid uk-flex uk-flex-center uk-margin-large-top" data-uk-grid>
                    <div class="uk-width-5-6@m uk-margin-bottom">
                        <!-- <div class="in-footer-warning in-margin-top-20@s">
                            <h5 class="uk-text-small uk-text-uppercase"><span>Risk Warning</span></h5>
                            <p class="uk-text-small">Trading derivatives and leveraged products carries a high level of risk, including the risk of losing substantially more than your initial investment. It is not suitable for everyone. Before you make any decision in relation
                                to a financial product you should obtain and consider our Product Disclosure Statement (PDS) and Financial Services Guide (FSG) available on our website and seek independent advice if necessary </p>
                        </div> -->
                    </div>
                    <div class="uk-width-1-2@m in-copyright-text">
                        <p>© Earnalipay 2022. All rights reserved.</p>
                    </div>
                    <div class="uk-width-1-2@m uk-text-right@m in-footer-socials">
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-facebook-square"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer content end -->
        <!-- module totop begin -->
        <div class="uk-visible@m">
            <a href="#" class="in-totop fas fa-chevron-up" data-uk-scroll></a>
        </div>
        <!-- module totop begin -->
    </footer>
</template>

<script>
export default {
    name: "HomeFooter",
    // props: {
    //   msg: String
    // }
    // mounted() {
    //     console.log(window.innerWidth)
    // }
};
</script>

<style scoped>
@media (max-width: 980px) {
    footer {
        position: absolute;
        width: 100%;
        bottom: 0;
    }
}
</style>
