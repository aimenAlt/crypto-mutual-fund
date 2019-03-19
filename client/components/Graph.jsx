// import React from "react"
// import {PieChart} from 'react-easy-chart';

// class Chart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     }

//     this.mouseOverHandler = this.mouseOverHandler.bind(this);
//     this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
//     this.mouseOutHandler = this.mouseOutHandler.bind(this);
//     this.createTooltip = this.createTooltip.bind(this);
//   }



//   mouseOverHandler(d, e) {
//     this.setState({
//       showToolTip: true,
//       top: e.y,
//       left: e.x,
//       value: d.value,
//       key: d.data.key});
//   }

//   mouseMoveHandler(e) {
//     if (this.state.showToolTip) {
//       this.setState({top: e.y, left: e.x});
//     }
//   }

//   mouseOutHandler() {
//     this.setState({showToolTip: false});
//   }

//   createTooltip() {
//     if (this.state.showToolTip) {
//       return (
//         <ToolTip
//           top={this.state.top}
//           left={this.state.left}
//         >
//           The value of {this.state.key} is {this.state.value}
//         </ToolTip>
//       );
//     }
//     return false;
//   }


//   render() {
//     const {  } = this.state;
//     const { investors } = this.props;
//     const invy = investors.map(element => {
//       let obj = { key: element.investor_name, value: element.percentOwned, color: '#aaac84' };
//       return obj;
//     });
//     return (
//       <div>
//         <PieChart
//           data={invy};
//           innerHoleSize={200}
//           mouseOverHandler={this.mouseOverHandler}
//           mouseOutHandler={this.mouseOutHandler.bind(this)}
//           mouseMoveHandler={this.mouseMoveHandler.bind(this)}
//           padding={10}
//           styles={this.styles}
//         />        
//       </div>
//     );
//   }
// }


// export default Chart;


















// // var React = require('react');
// // var Component = React.Component;
// // var CanvasJSReact = require('./../../canvas/canvasjs.react.js');
// // var CanvasJS = CanvasJSReact.CanvasJS;
// // var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// // class Graph extends Component {
// // 	render() {
// // 		const options = {
// // 			exportEnabled: true,
// // 			animationEnabled: true,
// // 			title: {
// // 				text: "Website Traffic Sources"
// // 			},
// // 			data: [{
// // 				type: "pie",
// // 				startAngle: 75,
// // 				toolTipContent: "<b>{label}</b>: {y}%",
// // 				showInLegend: "true",
// // 				legendText: "{label}",
// // 				indexLabelFontSize: 16,
// // 				indexLabel: "{label} - {y}%",
// // 				dataPoints: [
// // 					{ y: 18, label: "Direct" },
// // 					{ y: 49, label: "Organic Search" },
// // 					{ y: 9, label: "Paid Search" },
// // 					{ y: 5, label: "Referral" },
// // 					{ y: 19, label: "Social" }
// // 				]
// // 			}]
// // 		}
// // 		return (
// // 		<div>
// // 			<CanvasJSChart options = {options}
// // 				/* onRef={ref => this.chart = ref} */
// // 			/>
// // 			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// // 		</div>
// // 		);
// // 	}
// // }
// // module.exports = Graph;                              
