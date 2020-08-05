import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { ManagementAuditComponent } from "./management-audit/management-audit.component";
import { ManagementUserComponent } from "./management-user/management-user.component";
import { ReportComponent } from "./report/report.component";
import { ManagementRolesComponent } from "./management-roles/management-roles.component";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { MiDashboardComponent } from "./mi-dashboard/mi-dashboard.component";
import { RoadCongestionMapComponent } from "./road-congestion-map/road-congestion-map.component";
import { SocialMediaComponent } from "./social-media/social-media.component";
import { MediaMonitoringComponent } from "./media-monitoring/media-monitoring.component";
import { MiHistoryComponent } from "./mi-history/mi-history.component";
import { InvestorProfileComponent } from "./investor-profile/investor-profile.component";
import { InvestorAnalysisComponent } from "./investor-analysis/investor-analysis.component";
import { WealthPlanningComponent } from "./wealth-planning/wealth-planning.component";
import { AlertComponent } from "./alert/alert.component";
import { SchedulerComponent } from "./scheduler/scheduler.component";
import { TransactionModuleComponent } from "./transaction-module/transaction-module.component";

export const AdminRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "transaction-module",
        component: TransactionModuleComponent,
      },
      {
        path: "scheduler",
        component: SchedulerComponent,
      },
      {
        path: "alert",
        component: AlertComponent,
      },
      {
        path: "wealth-planning",
        component: WealthPlanningComponent,
      },
      {
        path: "investor-analysis",
        component: InvestorAnalysisComponent,
      },
      {
        path: "market-info",
        children: [
          { path: "dashboard", component: MiDashboardComponent },
          { path: "history", component: MiHistoryComponent },
        ],
      },
      {
        path: "investor-profile",
        component: InvestorProfileComponent,
      },
      {
        path: "analytics",
        component: AnalyticsComponent,
      },
      {
        path: "report",
        component: ReportComponent,
      },
      {
        path: "management",
        children: [
          {
            path: "users",
            component: ManagementUserComponent,
          },
          {
            path: "roles",
            component: ManagementRolesComponent,
          },
          {
            path: "audit-trails",
            component: ManagementAuditComponent,
          },
        ],
      },
    ],
  },
];
