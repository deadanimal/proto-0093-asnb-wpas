import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule,
  TabsModule,
  TooltipModule,
} from "ngx-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { LoadingBarModule } from "@ngx-loading-bar/core";

import { RouterModule } from "@angular/router";
import { AdminRoutes } from "./admin.routing";
import { QuillModule } from "ngx-quill";
import { NgxDropzoneModule } from "ngx-dropzone";
import { OrgChartModule } from "angular-org-chart";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { HttpClient, HttpClientModule } from "@angular/common/http";
// import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
// import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ManagementAuditComponent } from "./management-audit/management-audit.component";
import { ManagementUserComponent } from "./management-user/management-user.component";
import { ReportComponent } from "./report/report.component";
import { ManagementRolesComponent } from "./management-roles/management-roles.component";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { MiDashboardComponent } from "./mi-dashboard/mi-dashboard.component";
import { RoadCongestionMapComponent } from "./road-congestion-map/road-congestion-map.component";
import { SocialMediaComponent } from "./social-media/social-media.component";
import { MediaMonitoringComponent } from "./media-monitoring/media-monitoring.component";
import { MiHistoryComponent } from "./mi-history/mi-history.component";
import { InvestorProfileComponent } from './investor-profile/investor-profile.component';
import { InvestorAnalysisComponent } from './investor-analysis/investor-analysis.component';
import { WealthPlanningComponent } from './wealth-planning/wealth-planning.component';
import { AlertComponent } from './alert/alert.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { TransactionModuleComponent } from './transaction-module/transaction-module.component';

@NgModule({
  declarations: [
    ManagementAuditComponent,
    ManagementUserComponent,
    ManagementRolesComponent,
    ReportComponent,
    DashboardComponent,
    AnalyticsComponent,
    MiDashboardComponent,
    RoadCongestionMapComponent,
    SocialMediaComponent,
    MediaMonitoringComponent,
    MiHistoryComponent,
    InvestorProfileComponent,
    InvestorAnalysisComponent,
    WealthPlanningComponent,
    AlertComponent,
    SchedulerComponent,
    TransactionModuleComponent,
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes),
    QuillModule.forRoot(),
    NgxDropzoneModule,
    OrgChartModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    LeafletModule,
    // HttpClientModule,
  ],
})
export class AdminModule {}
