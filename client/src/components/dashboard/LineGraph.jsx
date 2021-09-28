import React, { useState } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
} from 'react-vis';
import { addNums } from '../../actions/profile';

const Chart = (props) => {
  return (
    (
      <div className='graph'>
        <XYPlot
          xType='ordinal'
          width={1000}
          height={500}
          style={{ strokeLinejoin: 'round' }}
        >
          <VerticalGridLines
            style={{
              line: { fill: 'none' },
            }}
          />
          <HorizontalGridLines
            style={{
              line: { fill: 'none' },
            }}
          />
          <XAxis
            title='Components (Incremented by 1)'
            style={{
              line: { fill: 'red' },
            }}
          />
          <YAxis
            title='Time (Hours)'
            style={{
              line: { fill: 'red' },
              strokeLinejoin: 'round',
            }}
          />
          <LineSeries
            data={[
              { x: 0, y: 0 },
              { x: 3, y: 8 },
              { x: 2, y: 8 },
              { x: 1, y: 8 },
              { x: 4, y: 8 },
              { x: 2, y: 8 },
            ]}
            style={{ stroke: '#0f6dd6', strokeWidth: 3, fill: 'none' }}
          />
        </XYPlot>
        <div>
          <form action='submit' className='form-group'>
            <h1 className='lead'>Time Data</h1>
            <input
              type='number'
              placeholder='Number of components'
              name='numComponents'
            />
            <br />
            <input
              // onChange={(e) => onChange(e)}
              type='number'
              placeholder='Hours to complete'
              name='numTime'
            />
            <br />
            <button className='btn btn-danger'>Submit</button>
          </form>
        </div>
      </div>
    ),
    (
      <div className='graph'>
        <XYPlot
          xType='ordinal'
          width={1000}
          height={500}
          style={{ strokeLinejoin: 'round' }}
        >
          <VerticalGridLines
            style={{
              line: { fill: 'none' },
            }}
          />
          <HorizontalGridLines
            style={{
              line: { fill: 'none' },
            }}
          />
          <XAxis
            title='Components (Incremented by 1)'
            style={{
              line: { fill: 'red' },
            }}
          />
          <YAxis
            title='Time (Hours)'
            style={{
              line: { fill: 'red' },
              strokeLinejoin: 'round',
            }}
          />
          <LineSeries
            data={[
              { x: 0, y: 0 },
              { x: 3, y: 8 },
              { x: 2, y: 8 },
              { x: 1, y: 8 },
              { x: 4, y: 8 },
              { x: 2, y: 8 },
            ]}
            style={{ stroke: '#0f6dd6', strokeWidth: 3, fill: 'none' }}
          />
        </XYPlot>
        <div>
          <form action='submit' className='form-group'>
            <h1 className='lead'>Time Data</h1>
            <input
              type='number'
              placeholder='Number of components'
              name='numComponents'
            />
            <br />
            <input
              // onChange={(e) => onChange(e)}
              type='number'
              placeholder='Hours to complete'
              name='numTime'
            />
            <br />
            <button className='btn btn-danger'>Submit</button>
          </form>
        </div>
      </div>
    )
  );
};
export default Chart;
