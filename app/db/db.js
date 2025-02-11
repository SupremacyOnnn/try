const data = [
  {
    name: "Kpi1",
    description: "Short Desccription goes here",
    tags: ["Kpi", "Trending", "Featured"],
    questions: [
      {
        question: "Questtion 1",
        answer: "Short Desription",
      },
      {
        question: "Questtion 2",
        answer: "Short Desription",
      },
      {
        question: "Questtion 3",
        answer: "Short Desription",
      },
      {
        question: "Questtion 4",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId1", "metricId2", "metricId3"],
    type: "card",
    data: 97,
    calculation: "",
    visualAvialable: "Universal",
    affliateApplicability: true,
  },
  {
    name: "Kpi2",
    description: "Short Desccription goes here",
    tags: ["Kpi", "Featured"],
    questions: [
      {
        question: "Questtion 4",
        answer: "Short Desription",
      },
      {
        question: "Questtion 2",
        answer: "Short Desription",
      },
      {
        question: "Questtion 5",
        answer: "Short Desription",
      },
      {
        question: "Questtion 3",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId4", "metricId5", "metricId6"],
    type: "card",
    data: 91,
    calculation: "",
    visualAvialable: "Universal",
    affliateApplicability: true,
  },
  {
    name: "Kpi3",
    description: "Short Desccription goes here",
    tags: ["Kpi", "Trending", "Featured"],
    questions: [
      {
        question: "Questtion 7",
        answer: "Short Desription",
      },
      {
        question: "Questtion 8",
        answer: "Short Desription",
      },
      {
        question: "Questtion 9",
        answer: "Short Desription",
      },
      {
        question: "Questtion 10",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId1", "metricId2", "metricId3"],
    type: "card",
    data: 87,
    calculation: "",
    visualAvialable: "Universal",
    affliateApplicability: true,
  },
  {
    name: "Kpi4",
    description: "Short Desccription goes here",
    tags: ["Kpi", "Featured"],
    questions: [
      {
        question: "Questtion 1",
        answer: "Short Desription",
      },
      {
        question: "Questtion 2",
        answer: "Short Desription",
      },
      {
        question: "Questtion 3",
        answer: "Short Desription",
      },
      {
        question: "Questtion 4",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId1", "metricId2", "metricId3"],
    type: "card",
    data: 79,
    calculation: "",
    visualAvialable: "Universal",
    affliateApplicability: true,
  },
  {
    name: "Kpi5",
    description: "Short Desccription goes here",
    tags: ["Kpi"],
    questions: [
      {
        question: "Questtion 5",
        answer: "Short Desription",
      },
      {
        question: "Questtion 6",
        answer: "Short Desription",
      },
      {
        question: "Questtion 7",
        answer: "Short Desription",
      },
      {
        question: "Questtion 8",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId1", "metricId2", "metricId3"],
    type: "chart",
    data: {
      chart: {
        type: "pie",
      },
      title: {
        text: "Egg Yolk Composition",
      },
      tooltip: {
        valueSuffix: "%",
      },
      subtitle: {
        text: 'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>',
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: [
            {
              enabled: true,
              distance: 20,
            },
            {
              enabled: true,
              distance: -40,
              format: "{point.percentage:.1f}%",
              style: {
                fontSize: "1.2em",
                textOutline: "none",
                opacity: 0.7,
              },
              filter: {
                operator: ">",
                property: "percentage",
                value: 10,
              },
            },
          ],
        },
      },
      series: [
        {
          name: "Percentage",
          colorByPoint: true,
          data: [
            {
              name: "Water",
              y: 55.02,
            },
            {
              name: "Fat",
              sliced: true,
              selected: true,
              y: 26.71,
            },
            {
              name: "Carbohydrates",
              y: 1.09,
            },
            {
              name: "Protein",
              y: 15.5,
            },
            {
              name: "Ash",
              y: 1.68,
            },
          ],
        },
      ],
    },
    calculation: "",
    visualAvialable: "Universal",
    affliateApplicability: true,
  },
  {
    name: "Kpi6",
    description: "Short Desccription goes here",
    tags: ["Kpi", "Trending", "Featured"],
    questions: [
      {
        question: "Questtion 1",
        answer: "Short Desription",
      },
      {
        question: "Questtion 2",
        answer: "Short Desription",
      },
      {
        question: "Questtion 3",
        answer: "Short Desription",
      },
      {
        question: "Questtion 4",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId1", "metricId2", "metricId3"],
    type: "chart",
    data: {
      title: {
        text: "",
      },
      subtitle: {
        text: "",
      },
      colors: ["#2BB3FF", "#1B3CE8", "#FFC657"],
      credits: {
        enabled: false,
      },
      xAxis: {
        tickWidth: 0,
        tickColor: "#FAFAFA",
        gridLineWidth: 0.4,
        startOnTick: false,
        endOnTick: false,
        lineColor: "#FAFAFA",
      },
      yAxis: {
        gridLineWidth: 1,
        lineColor: "#FAFAFA",
        tickWidth: 0,
        gridLineColor: "#FAFAFA",
        title: {
          text: "",
        },
      },
      legend: {
        borderColor: "#CCC",
        borderWidth: 0,
        shadow: false,
      },
      plotOptions: {
        series: {
          pointStart: 2010,
        },
      },
      exporting: {
        enabled: false,
      },
      series: [
        {
          name: "75th percentile",
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
          name: "Median",
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
        {
          name: "25th percentile",
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        },
      ],
    },
    calculation: "",
    visualAvialable: "Universal",
    affliateApplicability: true,
  },
  {
    name: "Kpi7",
    description: "Short Desccription goes here",
    tags: ["Kpi", "Trending", "Featured"],
    questions: [
      {
        question: "Questtion 1",
        answer: "Short Desription",
      },
      {
        question: "Questtion 2",
        answer: "Short Desription",
      },
      {
        question: "Questtion 3",
        answer: "Short Desription",
      },
      {
        question: "Questtion 4",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId1", "metricId2", "metricId3"],
    type: "chart",
    data: {
      chart: {
        type: "pie",
      },
      title: {
        text: "Egg Yolk Composition",
      },
      tooltip: {
        valueSuffix: "%",
      },
      subtitle: {
        text: 'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>',
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: [
            {
              enabled: true,
              distance: 20,
            },
            {
              enabled: true,
              distance: -40,
              format: "{point.percentage:.1f}%",
              style: {
                fontSize: "1.2em",
                textOutline: "none",
                opacity: 0.7,
              },
              filter: {
                operator: ">",
                property: "percentage",
                value: 10,
              },
            },
          ],
        },
      },
      series: [
        {
          name: "Percentage",
          colorByPoint: true,
          data: [
            {
              name: "Water",
              y: 50.02,
            },
            {
              name: "Fat",
              sliced: true,
              selected: true,
              y: 230.71,
            },
            {
              name: "Carbohydrates",
              y: 2.09,
            },
            {
              name: "Protein",
              y: 15.5,
            },
            {
              name: "Ash",
              y: 1.68,
            },
          ],
        },
      ],
    },
    calculation: "",
    visualAvialable: "Universal",
    affliateApplicability: true,
  },
  {
    name: "Kpi8",
    description: "Short Desccription goes here",
    tags: ["Kpi"],
    questions: [
      {
        question: "Questtion 1",
        answer: "Short Desription",
      },
      {
        question: "Questtion 2",
        answer: "Short Desription",
      },
      {
        question: "Questtion 3",
        answer: "Short Desription",
      },
      {
        question: "Questtion 4",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId1", "metricId2", "metricId3"],
    type: "chart",
    data: {
      title: {
        text: "",
      },
      subtitle: {
        text: "",
      },
      colors: ["#2BB3FF", "#1B3CE8", "#FFC657"],
      credits: {
        enabled: false,
      },
      xAxis: {
        tickWidth: 0,
        tickColor: "#FAFAFA",
        gridLineWidth: 0.4,
        startOnTick: false,
        endOnTick: false,
        lineColor: "#FAFAFA",
      },
      yAxis: {
        gridLineWidth: 1,
        lineColor: "#FAFAFA",
        tickWidth: 0,
        gridLineColor: "#FAFAFA",
        title: {
          text: "",
        },
      },
      legend: {
        borderColor: "#CCC",
        borderWidth: 0,
        shadow: false,
      },
      plotOptions: {
        series: {
          pointStart: 2010,
        },
      },
      exporting: {
        enabled: false,
      },
      series: [
        {
          name: "75th percentile",
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
          name: "Median",
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
        {
          name: "25th percentile",
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        },
      ],
    },
    calculation: "",
    visualAvialable: "Universal",
    affliateApplicability: true,
  },
  {
    name: "Layout1",
    description: "Short Desccription goes here",
    tags: ["layout", "Trending", "Featured"],
    questions: [
      {
        question: "Questtion 1",
        answer: "Short Desription",
      },
      {
        question: "Questtion 2",
        answer: "Short Desription",
      },
      {
        question: "Questtion 3",
        answer: "Short Desription",
      },
      {
        question: "Questtion 4",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId1", "metricId2", "metricId3"],
    type: "layout",
    amountOfPage: 1,
    visualAvialable: "Universal",
    affliateApplicability: true,
    KpiUsed: [],
    noOfKpiUse: 0,
  },
  {
    name: "Layout2",
    description: "Short Desccription goes here",
    tags: ["layout"],
    questions: [
      {
        question: "Questtion 1",
        answer: "Short Desription",
      },
      {
        question: "Questtion 2",
        answer: "Short Desription",
      },
      {
        question: "Questtion 3",
        answer: "Short Desription",
      },
      {
        question: "Questtion 4",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId1", "metricId2", "metricId3"],
    type: "layout",
    amountOfPage: 1,
    visualAvialable: "Universal",
    affliateApplicability: true,
    KpiUsed: [],
    noOfKpiUse: 0,
  },
  {
    name: "Layout3",
    description: "Short Desccription goes here",
    tags: ["layout", "Trending", "Featured"],
    questions: [
      {
        question: "Questtion 1",
        answer: "Short Desription",
      },
      {
        question: "Questtion 2",
        answer: "Short Desription",
      },
      {
        question: "Questtion 3",
        answer: "Short Desription",
      },
      {
        question: "Questtion 4",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId1", "metricId2", "metricId3"],
    type: "layout",
    amountOfPage: 1,
    visualAvialable: "Universal",
    affliateApplicability: true,
    KpiUsed: [],
    noOfKpiUse: 0,
  },
  {
    name: "Layout4",
    description: "Short Desccription goes here",
    tags: ["layout"],
    questions: [
      {
        question: "Questtion 1",
        answer: "Short Desription",
      },
      {
        question: "Questtion 2",
        answer: "Short Desription",
      },
      {
        question: "Questtion 3",
        answer: "Short Desription",
      },
      {
        question: "Questtion 4",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId1", "metricId2", "metricId3"],
    type: "layout",
    amountOfPage: 1,
    visualAvialable: "Universal",
    affliateApplicability: true,
    KpiUsed: [],
    noOfKpiUse: 0,
  },
  {
    name: "Layout5",
    description: "Short Desccription goes here",
    tags: ["layout", "Trending", "Featured"],
    questions: [
      {
        question: "Questtion 1",
        answer: "Short Desription",
      },
      {
        question: "Questtion 2",
        answer: "Short Desription",
      },
      {
        question: "Questtion 3",
        answer: "Short Desription",
      },
      {
        question: "Questtion 4",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId1", "metricId2", "metricId3"],
    type: "layout",
    amountOfPage: 1,
    visualAvialable: "Universal",
    affliateApplicability: true,
    KpiUsed: [],
    noOfKpiUse: 0,
  },
  {
    name: "Layout6",
    description: "Short Desccription goes here",
    tags: ["layout"],
    questions: [
      {
        question: "Questtion 1",
        answer: "Short Desription",
      },
      {
        question: "Questtion 2",
        answer: "Short Desription",
      },
      {
        question: "Questtion 3",
        answer: "Short Desription",
      },
      {
        question: "Questtion 4",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId1", "metricId2", "metricId3"],
    type: "layout",
    amountOfPage: 1,
    visualAvialable: "Universal",
    affliateApplicability: true,
    KpiUsed: [],
    noOfKpiUse: 0,
  },
  {
    name: "StoryBoard1",
    description: "Short Desccription goes here",
    tags: ["storyboard", "Trending", "Featured"],
    questions: [
      {
        question: "Questtion 1",
        answer: "Short Desription",
      },
      {
        question: "Questtion 2",
        answer: "Short Desription",
      },
      {
        question: "Questtion 3",
        answer: "Short Desription",
      },
      {
        question: "Questtion 4",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId1", "metricId2", "metricId3"],
    type: "story",
    coupled: 6,
    affliateApplicability: true,
    KpiUsed: 9001,
  },
  {
    name: "StoryBoard2",
    description: "Short Desccription goes here",
    tags: ["storyboard", "Trending", "Featured"],
    questions: [
      {
        question: "Questtion 1",
        answer: "Short Desription",
      },
      {
        question: "Questtion 2",
        answer: "Short Desription",
      },
      {
        question: "Questtion 3",
        answer: "Short Desription",
      },
      {
        question: "Questtion 4",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId1", "metricId2", "metricId3"],
    type: "story",
    coupled: 6,
    affliateApplicability: true,
    KpiUsed: 9001,
  },
  {
    name: "StoryBoard3",
    description: "Short Desccription goes here",
    tags: ["storyboard"],
    questions: [
      {
        question: "Questtion 1",
        answer: "Short Desription",
      },
      {
        question: "Questtion 2",
        answer: "Short Desription",
      },
      {
        question: "Questtion 3",
        answer: "Short Desription",
      },
      {
        question: "Questtion 4",
        answer: "Short Desription",
      },
    ],
    metricId: ["metricId1", "metricId2", "metricId3"],
    type: "story",
    coupled: 6,
    affliateApplicability: true,
    KpiUsed: 9001,
  },
];

const getAllData = () => {
  return data;
};

export { getAllData };
