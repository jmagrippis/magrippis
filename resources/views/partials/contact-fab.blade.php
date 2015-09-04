<md-fab-speed-dial md-direction="up" class="contact md-fling">
    <md-fab-trigger>
        <md-button aria-label="contact-menu" class="md-fab md-accent">
            <md-icon md-font-set="material-icons">menu</md-icon>
        </md-button>
    </md-fab-trigger>
    <md-fab-actions>
        <md-button aria-label="facebook" class="md-fab md-raised md-mini" ng-click="core.goTo('https://www.facebook.com/jmagr')">
            <md-icon><i class="fa fa-facebook"></i></md-icon>
        </md-button>
        <md-button aria-label="twitter" class="md-fab md-raised md-mini" ng-click="core.goTo('https://twitter.com/magrippinho')">
            <md-icon><i class="fa fa-twitter"></i></md-icon>
        </md-button>
        <md-button aria-label="LinkedIn" class="md-fab md-raised md-mini" ng-click="core.goTo('https://linkedin.com/in/jmagr')">
            <md-icon><i class="fa fa-linkedin"></i></md-icon>
        </md-button>
        <md-button aria-label="email" class="md-fab md-raised md-mini" ng-click="core.showContact($event)">
            <md-icon md-font-set="material-icons">email</md-icon>
        </md-button>
    </md-fab-actions>
</md-fab-speed-dial>