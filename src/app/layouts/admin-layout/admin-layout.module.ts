import { SkillsComponent } from './../../pages/skills/skills.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParametersComponent } from 'src/app/pages/parameters/parameters.component';
import { ProjectsComponent } from 'src/app/pages/projects/projects.component';
import { ExperienceComponent } from 'src/app/pages/experience/experience.component';
import { UserComponent } from 'src/app/pages/user/user.component';

import { ContentComponent } from 'src/app/pages/content/content.component';
import { ContenteditComponent } from 'src/app/pages/contentedit/contentedit.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    AngularEditorModule ,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    ParametersComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
    UserComponent,
    ContentComponent,
    ContenteditComponent
  ]
})

export class AdminLayoutModule { }
