<md-fab-speed-dial md-direction="up" class="contact md-fling">
    <md-fab-trigger>
        <md-button aria-label="contact-menu" class="md-fab md-accent">
            <md-icon md-font-set="material-icons">menu</md-icon>
        </md-button>
    </md-fab-trigger>
    <md-fab-actions>
        <md-button aria-label="facebook" class="md-fab md-raised md-mini">
            <md-icon><a target="_blank" href="https://www.facebook.com/jmagr"><i class="fa fa-facebook"></i></a></md-icon>
        </md-button>
        <md-button aria-label="twitter" class="md-fab md-raised md-mini">
            <md-icon><a target="_blank" href="https://twitter.com/magrippinho"><i class="fa fa-twitter"></i></a></md-icon>
        </md-button>
        <md-button aria-label="LinkedIn" class="md-fab md-raised md-mini">
            <md-icon><a target="_blank" href="https://gr.linkedin.com/in/jmagr"><i class="fa fa-linkedin"></i></a></md-icon>
        </md-button>
        <md-button aria-label="email" class="md-fab md-raised md-mini">
            <md-icon><a ng-click="core.showContact($event)"><i class="material-icons">email</i></a></md-icon>
        </md-button>
    </md-fab-actions>
</md-fab-speed-dial>