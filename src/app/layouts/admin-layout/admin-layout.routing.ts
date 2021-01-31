import { ContenteditComponent } from './../../pages/contentedit/contentedit.component';
import { ContentComponent } from './../../pages/content/content.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ParametersComponent } from 'src/app/pages/parameters/parameters.component';
import { ProjectsComponent } from 'src/app/pages/projects/projects.component';
import { SkillsComponent } from 'src/app/pages/skills/skills.component';
import { ExperienceComponent } from 'src/app/pages/experience/experience.component';
import { UserComponent } from 'src/app/pages/user/user.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'contents',      component: ContentComponent },
    { path: 'contentedit',      component: ContenteditComponent },
    { path: 'parameters',      component: ParametersComponent },
    { path: 'projects',      component: ProjectsComponent },
    { path: 'skills',      component: SkillsComponent },
    { path: 'experiences',      component: ExperienceComponent },
    { path: 'users',      component: UserComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'tables',         component: TablesComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent }
];
