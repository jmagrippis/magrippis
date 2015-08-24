<md-toolbar>
    <div class="md-toolbar-tools">
        <h2>
            <span>Johnny Magrippis</span>
        </h2>
        <span flex></span>
        <md-button class="md-icon-button md-raised md-primary" aria-label="Home" ui-sref="app.home" ng-disabled="core.isActiveState('app.home')">
            <md-icon md-font-set="material-icons">style</md-icon>
            <md-tooltip>
                Home
            </md-tooltip>
        </md-button>
        <md-button class="md-icon-button md-raised md-primary" aria-label="CV" ui-sref="app.cv" ng-disabled="core.isActiveState('app.cv')">
            <md-icon md-font-set="material-icons" ui-sref="app.cv">assignment</md-icon>
            <md-tooltip>
                CV
            </md-tooltip>
        </md-button>
        <md-button class="md-icon-button md-raised md-primary" aria-label="Portfolio" ui-sref="app.portfolio" ng-disabled="core.isActiveState('app.portfolio')">
            <md-icon md-font-set="material-icons" ui-sref="app.portfolio">assignment_turned_in</md-icon>
            <md-tooltip>
                Portfolio
            </md-tooltip>
        </md-button>
        <md-button class="md-icon-button md-raised md-primary" ui-sref="app.hobbies" aria-label="Hobbies" ng-disabled="core.isActiveState('app.hobbies')">
            <md-icon md-font-set="material-icons">favorite</md-icon>
            <md-tooltip>
                Hobbies
            </md-tooltip>
        </md-button>
        <md-button class="md-icon-button md-raised md-primary" aria-label="Blog">
            <md-icon md-font-set="material-icons">mode_edit</md-icon>
            <md-tooltip>
                Blog
            </md-tooltip>
        </md-button>
    </div>
</md-toolbar>