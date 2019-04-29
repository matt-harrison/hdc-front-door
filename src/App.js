import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div id="hdc-app" className="m-4">
        <section className="mb-4">
          <div className="mx-auto mb-4 container">
            <div className="w-1/2">
              <p className="mb-1 color-blue bold">Homes.com Match</p>
              <p className="mb-1 border-b-gray pb-1 font-serif font-2.5">Your personalized homes search tool</p>
              <p>A smarter way to find your ideal first or next home. Get matched with the best homes for you. Simply let us know what matters most and we’ll do the rest.</p>
            </div>
          </div>
          <div className="mx-auto container">
            <p className="mb-1">
              Homes.com provides home buyers, sellers, renters, and <a href="/1">home value</a> seekers with up-to-date real estate information, tools, and home listings across the US and Canada. Our website and mobile apps give consumers the information they need to find their first or next home, as well as innovative tools like Snap and Search, Homes.com Match and HomeShare to make the home search experience collaborative, simple and effective.
            </p>
            <p className="mb-1">
              Our 'how to' section guides first time, or many time, home buyers, sellers, <a href="/2">renters</a> and finance-seeking consumers through those often complicated processes, with tips, mortgage calculators, and 'everything home' advice to educate, inspire and facilitate smooth transactions & moves.
            </p>
            <p className="mb-1">
              The <a href="/3">Homes.com blog</a> has thousands of stories, checklists, 101 tutorials and entertaining articles that can benefit both the homeowner and home seeker. Follow us on our social media channels or subscribe to our blog feed to get fresh-daily and valuable homes-driven content to your inbox!
            </p>
            <p>
              As one of the oldest (and easiest to remember) home listing resources, Homes.com offers a clean interface consumers love, and home search tools that let home shoppers choose their nice-to-haves and must have home features. With millions of listings of houses, condos, townhomes and <a href="/4">apartments for rent</a> or sale, Homes.com is the only website (or home search app) you'll need. Consumer-first, simply smarter. We think you'll love finding your next home on Homes.com
            </p>
          </div>
        </section>

        <div className="mb-4 mx-auto container">
          <div className="w-full">
            <div className="mb-1 bg-orange color-white text-center">Max content well of 784px</div>
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
              <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
              <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
              <div className="mr-1 w-1/4 bg-orange text-center">1/4</div>
              <div className="w-1/4 bg-orange text-center">1/4</div>
            </div>
            <div className="flex color-white">
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="mr-1 w-1/5 bg-orange text-center">1/5</div>
              <div className="w-1/5 bg-orange text-center">1/5</div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-1 bg-blue color-white text-center">Responsive</div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-1/2 bg-blue text-center">1/2</div>
            <div className="w-1/2 bg-blue text-center">1/2</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-1/3 bg-blue text-center">1/3</div>
            <div className="mr-1 w-1/3 bg-blue text-center">1/3</div>
            <div className="w-1/3 bg-blue text-center">1/3</div>
          </div>
          <div className="flex mb-1 color-white">
            <div className="mr-1 w-1/4 bg-blue text-center">1/4</div>
            <div className="mr-1 w-1/4 bg-blue text-center">1/4</div>
            <div className="mr-1 w-1/4 bg-blue text-center">1/4</div>
            <div className="w-1/4 bg-blue text-center">1/4</div>
          </div>
          <div className="flex color-white">
            <div className="mr-1 w-1/5 bg-blue text-center">1/5</div>
            <div className="mr-1 w-1/5 bg-blue text-center">1/5</div>
            <div className="mr-1 w-1/5 bg-blue text-center">1/5</div>
            <div className="mr-1 w-1/5 bg-blue text-center">1/5</div>
            <div className="w-1/5 bg-blue text-center">1/5</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
