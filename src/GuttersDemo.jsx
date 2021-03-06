import React, { Component } from 'react';
import './css/main.scss';
import './css/gutters.scss';

class App extends Component {
  render() {
    return (
      <div className="m-4">
        <div className="mx-auto mb-4 px-2 container">
          <div className="w-full">
            <div className="mb-1 bg-orange color-white text-center">Max content well of 784px</div>
            <div className="flex mb-1 color-white">
              <div className="mr-1 w-1/2 bg-orange text-center">1/2</div>
              <div className="w-1/2 bg-orange text-center">1/2</div>
            </div>

            <div className="flex gutters mb-1 color-white">
              <div className="mr-1 w-1/3 bg-orange text-center">1/3</div>
              <div className="mr-1 w-1/3 bg-orange text-center">1/3</div>
              <div className="w-1/3 bg-orange text-center">1/3</div>
            </div>
            <div className="flex gutters mb-1 color-white">
              <div className="mr-1 w-2/3 bg-blue text-center">2/3</div>
              <div className="w-1/3 bg-orange text-center">1/3</div>
            </div>
            <div className="flex gutters mb-1 color-white">
              <div className="mr-1 w-1/3 bg-orange text-center">1/3</div>
              <div className="w-2/3 bg-blue text-center">2/3</div>
            </div>

            <div className="flex gutters mb-1 color-white">
              <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
              <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
              <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
              <div className="w-1/4 bg-orange text-center">1/4</div>
            </div>
            <div className="flex gutters mb-1 color-white">
              <div className="mr-1 w-2/4 bg-blue text-center">2/4</div>
              <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
              <div className="w-1/4 bg-orange text-center">1/4</div>
            </div>
            <div className="flex gutters mb-1 color-white">
              <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
              <div className="mr-1 w-2/4 bg-blue text-center">2/4</div>
              <div className="w-1/4 bg-orange text-center">1/4</div>
            </div>
            <div className="flex gutters mb-1 color-white">
              <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
              <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
              <div className="w-2/4 bg-blue text-center">2/4</div>
            </div>

            <div className="flex mb-1 color-white">
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="w-1/5 bg-orange text-center">1/5</div>
            </div>
            <div className="flex gutters mb-1 color-white">
              <div className="mr-1 w-2/5 bg-blue text-center">2/5</div>
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="w-1/5 bg-orange text-center">1/5</div>
            </div>
            <div className="flex gutters mb-1 color-white">
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="mr-1 w-2/5 bg-blue text-center">2/5</div>
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="w-1/5 bg-orange text-center">1/5</div>
            </div>
            <div className="flex gutters mb-1 color-white">
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="mr-1 w-2/5 bg-blue text-center">2/5</div>
              <div className="w-1/5 bg-orange text-center">1/5</div>
            </div>
            <div className="flex gutters mb-1 color-white">
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="w-2/5 bg-blue text-center">2/5</div>
            </div>
            <div className="flex gutters mb-1 color-white">
              <div className="mr-1 w-3/5 bg-blue text-center">3/5</div>
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="w-1/5 bg-orange text-center">1/5</div>
            </div>
            <div className="flex gutters mb-1 color-white">
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="mr-1 w-3/5 bg-blue text-center">3/5</div>
              <div className="w-1/5 bg-orange text-center">1/5</div>
            </div>
            <div className="flex gutters mb-1 color-white">
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="w-3/5 bg-blue text-center">3/5</div>
            </div>
            <div className="flex gutters mb-1 color-white">
              <div className="mr-1 w-4/5 bg-blue text-center">4/5</div>
              <div className="w-1/5 bg-orange text-center">1/5</div>
            </div>
            <div className="flex gutters mb-1 color-white">
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="w-4/5 bg-blue text-center">4/5</div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-1 bg-orange color-white text-center">Responsive</div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-1/2 bg-orange text-center">1/2</div>
            <div className="w-1/2 bg-orange text-center">1/2</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-1/3 bg-orange text-center">1/3</div>
            <div className="mr-1 w-1/3 bg-orange text-center">1/3</div>
            <div className="w-1/3 bg-orange text-center">1/3</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-2/3 bg-blue text-center">2/3</div>
            <div className="w-1/3 bg-orange text-center">1/3</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-1/3 bg-orange text-center">1/3</div>
            <div className="w-2/3 bg-blue text-center">2/3</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
            <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
            <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
            <div className="w-1/4 bg-orange text-center">1/4</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-2/4 bg-blue text-center">2/4</div>
            <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
            <div className="w-1/4 bg-orange text-center">1/4</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
            <div className="mr-1 w-2/4 bg-blue text-center">2/4</div>
            <div className="w-1/4 bg-orange text-center">1/4</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
            <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
            <div className="w-2/4 bg-blue text-center">2/4</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="w-1/5 bg-orange text-center">1/5</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-2/5 bg-blue text-center">2/5</div>
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="w-1/5 bg-orange text-center">1/5</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="mr-1 w-2/5 bg-blue text-center">2/5</div>
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="w-1/5 bg-orange text-center">1/5</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="mr-1 w-2/5 bg-blue text-center">2/5</div>
            <div className="w-1/5 bg-orange text-center">1/5</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="w-2/5 bg-blue text-center">2/5</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-3/5 bg-blue text-center">3/5</div>
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="w-1/5 bg-orange text-center">1/5</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="mr-1 w-3/5 bg-blue text-center">3/5</div>
            <div className="w-1/5 bg-orange text-center">1/5</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="w-3/5 bg-blue text-center">3/5</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-4/5 bg-blue text-center">5/5</div>
            <div className="w-1/5 bg-orange text-center">1/5</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
            <div className="w-4/5 bg-blue text-center">5/5</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
