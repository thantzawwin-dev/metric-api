export default {
  datasetsProps: {
    borderColor: "white",
    borderWidth: 0
  },
  options: {
    color: '#2E2C34',
    borderColor: '#000000',
    borderWidth: 0,
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            family: 'manropeFont',
            style: 'normal',
            weight: 600,
            size: '16px',
          },
          boxWidth: 12,
          boxHeight: 12,
          padding: 15,
          pointStyle: 'rect',
          usePointStyle: true,
        }
      },
      decimation: {},
      filler: {},
      subtitle: {},
      title: {},
      tooltip: {},
    }
  }
}

