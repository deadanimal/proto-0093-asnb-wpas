import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Router } from "@angular/router";
am4core.useTheme(am4themes_animated);
import noUiSlider from "nouislider";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit, OnDestroy {
  chart;

  // data

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();

  constructor(private zone: NgZone) {}

  ngOnInit() {
    // this.initChart();
    this.initChart2();
    this.initChart3();
    var c: any = document.getElementById("input-slider"),
      d = document.getElementById("input-slider-value");

    noUiSlider.create(c, {
      start: 100,
      connect: [true, false],
      //step: 1000,
      range: {
        min: 100,
        max: 500,
      },
    }),
      c.noUiSlider.on("update", function (a, b) {
        d.textContent = a[b];
      });

    var c1: any = document.getElementById("input-slider-range"),
      d1 = document.getElementById("input-slider-range-value-low"),
      e = document.getElementById("input-slider-range-value-high"),
      f = [d1, e];

    noUiSlider.create(c1, {
      start: [
        parseInt(d1.getAttribute("data-range-value-low")),
        parseInt(e.getAttribute("data-range-value-high")),
      ],
      connect: !0,
      range: {
        min: parseInt(c1.getAttribute("data-range-value-min")),
        max: parseInt(c1.getAttribute("data-range-value-max")),
      },
    }),
      c1.noUiSlider.on("update", function (a, b) {
        f[b].textContent = a[b];
      });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        console.log("Chart disposed");
        this.chart.dispose();
      }
    });
  }

  initChart() {
    let chart = am4core.create("chartDashboard", am4charts.XYChart);

    chart.data = [
      { date: 1577743200000, open: 122, close: 104 },
      { date: 1577829600000, open: 121, close: 70 },
      { date: 1577916000000, open: 101, close: 55 },
      { date: 1578002400000, open: 103, close: 45 },
      { date: 1578088800000, open: 153, close: 85 },
      { date: 1578175200000, open: 150, close: 116 },
      { date: 1578261600000, open: 135, close: 153 },
      { date: 1578348000000, open: 98, close: 152 },
      { date: 1578434400000, open: 101, close: 192 },
      { date: 1578520800000, open: 110, close: 225 },
      { date: 1578607200000, open: 157, close: 233 },
      { date: 1578693600000, open: 128, close: 232 },
      { date: 1578780000000, open: 101, close: 235 },
      { date: 1578866400000, open: 109, close: 200 },
      { date: 1578952800000, open: 142, close: 214 },
      { date: 1579039200000, open: 123, close: 224 },
      { date: 1579125600000, open: 99, close: 176 },
      { date: 1579212000000, open: 100, close: 172 },
      { date: 1579298400000, open: 67, close: 138 },
      { date: 1579384800000, open: 81, close: 127 },
      { date: 1579471200000, open: 39, close: 137 },
      { date: 1579557600000, open: 73, close: 127 },
      { date: 1579644000000, open: 78, close: 154 },
      { date: 1579730400000, open: 116, close: 127 },
      { date: 1579816800000, open: 136, close: 78 },
      { date: 1579903200000, open: 139, close: 61 },
      { date: 1579989600000, open: 162, close: 13 },
      { date: 1580076000000, open: 201, close: 41 },
      { date: 1580162400000, open: 221, close: 72 },
      { date: 1580248800000, open: 257, close: 87 },
      { date: 1580335200000, open: 211, close: 114 },
      { date: 1580421600000, open: 233, close: 138 },
      { date: 1580508000000, open: 261, close: 141 },
      { date: 1580594400000, open: 279, close: 130 },
    ];

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 60;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    // only for the legend
    let iconSeries = chart.series.push(new am4charts.ColumnSeries());
    iconSeries.fill = am4core.color("#ec0800");
    iconSeries.strokeOpacity = 0;
    iconSeries.stroke = am4core.color("#ec0800");
    iconSeries.name = "Events";
    iconSeries.dataFields.dateX = "date";
    iconSeries.dataFields.valueY = "v";

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
    series.sequencedInterpolation = true;
    series.stroke = am4core.color("#1b7cb3");
    series.strokeWidth = 2;
    series.name = "District Metered Usage";
    series.stroke = chart.colors.getIndex(0);
    series.fill = series.stroke;
    series.fillOpacity = 0.8;

    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.fill = new am4core.InterfaceColorSet().getFor("background");
    bullet.fillOpacity = 1;
    bullet.strokeWidth = 2;
    bullet.circle.radius = 4;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "open";
    series2.sequencedInterpolation = true;
    series2.strokeWidth = 2;
    series2.tooltip.getFillFromObject = false;
    series2.tooltip.getStrokeFromObject = true;
    series2.tooltip.label.fill = am4core.color("#000");
    series2.name = "SP Aggregate usage";
    series2.stroke = chart.colors.getIndex(7);
    series2.fill = series2.stroke;

    let bullet2 = series2.bullets.push(new am4charts.CircleBullet());
    bullet2.fill = bullet.fill;
    bullet2.fillOpacity = 1;
    bullet2.strokeWidth = 2;
    bullet2.circle.radius = 4;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();

    // let negativeRange;

    // create ranges
    let negativeRange;

    // create ranges
    chart.events.on("datavalidated", function () {
      series.dataItems.each(function (s1DataItem) {
        let s1PreviousDataItem;
        let s2PreviousDataItem;

        let s2DataItem = series2.dataItems.getIndex(s1DataItem.index);

        if (s1DataItem.index > 0) {
          s1PreviousDataItem = series.dataItems.getIndex(s1DataItem.index - 1);
          s2PreviousDataItem = series2.dataItems.getIndex(s1DataItem.index - 1);
        }

        let startTime = am4core.time
          .round(
            new Date(s1DataItem.dateX.getTime()),
            dateAxis.baseInterval.timeUnit,
            dateAxis.baseInterval.count
          )
          .getTime();

        // intersections
        if (s1PreviousDataItem && s2PreviousDataItem) {
          let x0 =
            am4core.time
              .round(
                new Date(s1PreviousDataItem.dateX.getTime()),
                dateAxis.baseInterval.timeUnit,
                dateAxis.baseInterval.count
              )
              .getTime() +
            dateAxis.baseDuration / 2;
          let y01 = s1PreviousDataItem.valueY;
          let y02 = s2PreviousDataItem.valueY;

          let x1 = startTime + dateAxis.baseDuration / 2;
          let y11 = s1DataItem.valueY;
          let y12 = s2DataItem.valueY;

          let intersection = am4core.math.getLineIntersection(
            { x: x0, y: y01 },
            { x: x1, y: y11 },
            { x: x0, y: y02 },
            { x: x1, y: y12 }
          );

          startTime = Math.round(intersection.x);
        }

        // start range here
        if (s2DataItem.valueY > s1DataItem.valueY) {
          if (!negativeRange) {
            negativeRange = dateAxis.createSeriesRange(series);
            negativeRange.date = new Date(startTime);
            negativeRange.contents.fill = series2.fill;
            negativeRange.contents.fillOpacity = 0.8;
          }
        } else {
          // if negative range started
          if (negativeRange) {
            negativeRange.endDate = new Date(startTime);
          }
          negativeRange = undefined;
        }
        // end if last
        if (s1DataItem.index == series.dataItems.length - 1) {
          if (negativeRange) {
            negativeRange.endDate = new Date(
              s1DataItem.dateX.getTime() + dateAxis.baseDuration / 2
            );
            negativeRange = undefined;
          }
        }
      });
    });
  }

  initChart2() {
    let chart = am4core.create("chartDashboard2", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    let data = [];
    let open = 100;
    let close = 250;

    for (var i = 1; i < 120; i++) {
      open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 4);
      close = Math.round(
        open +
          Math.random() * 5 +
          i / 5 -
          (Math.random() < 0.5 ? 1 : -1) * Math.random() * 2
      );
      data.push({ date: new Date(2018, 0, i), open: open, close: close });
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0.3;
    series.defaultState.transitionDuration = 1000;
    series.tensionX = 0.8;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "open";
    series2.sequencedInterpolation = true;
    series2.defaultState.transitionDuration = 1500;
    series2.stroke = chart.colors.getIndex(6);
    series2.tensionX = 0.8;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();
  }

  initChart3() {
    let chart = am4core.create("chartDashboard3", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0;

    chart.padding(0, 0, 0, 0);

    chart.zoomOutButton.disabled = true;

    let data = [];
    let visits = 10;
    let i = 0;

    for (i = 0; i <= 30; i++) {
      visits -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date().setSeconds(i - 30), value: visits });
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 30;
    dateAxis.dateFormats.setKey("second", "ss");
    dateAxis.periodChangeDateFormats.setKey("second", "[bold]h:mm a");
    dateAxis.periodChangeDateFormats.setKey("minute", "[bold]h:mm a");
    dateAxis.periodChangeDateFormats.setKey("hour", "[bold]h:mm a");
    dateAxis.renderer.inside = true;
    dateAxis.renderer.axisFills.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.interpolationDuration = 500;
    valueAxis.rangeChangeDuration = 500;
    valueAxis.renderer.inside = true;
    valueAxis.renderer.minLabelPosition = 0.05;
    valueAxis.renderer.maxLabelPosition = 0.95;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.interpolationDuration = 500;
    series.defaultState.transitionDuration = 0;
    series.tensionX = 0.8;

    chart.events.on("datavalidated", function () {
      dateAxis.zoom({ start: 1 / 15, end: 1.2 }, false, true);
    });

    dateAxis.interpolationDuration = 500;
    dateAxis.rangeChangeDuration = 500;

    document.addEventListener(
      "visibilitychange",
      function () {
        if (document.hidden) {
          if (interval) {
            clearInterval(interval);
          }
        } else {
          startInterval();
        }
      },
      false
    );

    // add data
    let interval;
    function startInterval() {
      interval = setInterval(function () {
        visits =
          visits +
          Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
        let lastdataItem = series.dataItems.getIndex(
          series.dataItems.length - 1
        );
        chart.addData(
          {
            date: new Date(lastdataItem.dateX.getTime() + 1000),
            value: visits,
          },
          1
        );
      }, 1000);
    }

    startInterval();

    // all the below is optional, makes some fancy effects
    // gradient fill of the series
    series.fillOpacity = 1;
    let gradient = new am4core.LinearGradient();
    gradient.addColor(chart.colors.getIndex(0), 0.2);
    gradient.addColor(chart.colors.getIndex(0), 0);
    series.fill = gradient;

    // this makes date axis labels to fade out
    dateAxis.renderer.labels.template.adapter.add("fillOpacity", function (
      fillOpacity,
      target
    ) {
      let dataItem = target.dataItem;
      return dataItem.position;
    });

    // need to set this, otherwise fillOpacity is not changed and not set
    dateAxis.events.on("validated", function () {
      am4core.iter.each(dateAxis.renderer.labels.iterator(), function (label) {
        label.fillOpacity = label.fillOpacity;
      });
    });

    // this makes date axis labels which are at equal minutes to be rotated
    dateAxis.renderer.labels.template.adapter.add("rotation", function (
      rotation,
      target
    ) {
      let dataItem = target.dataItem;
      // if (
      //   dataItem.dates &&
      //   dataItem.dates.getTime() ==
      //     am4core.time
      //       .round(new Date(dataItem.dates.getTime()), "minute")
      //       .getTime()
      // ) {
      target.verticalCenter = "middle";
      target.horizontalCenter = "left";
      return -90;
      // } else {
      //   target.verticalCenter = "bottom";
      //   target.horizontalCenter = "middle";
      //   return 0;
      // }
    });

    // bullet at the front of the line
    let bullet = series.createChild(am4charts.CircleBullet);
    bullet.circle.radius = 5;
    bullet.fillOpacity = 1;
    bullet.fill = chart.colors.getIndex(0);
    bullet.isMeasured = false;

    series.events.on("validated", function () {
      bullet.moveTo(series.dataItems.last.point);
      bullet.validatePosition();
    });
  }
}
