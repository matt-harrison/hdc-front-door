import React, { Component } from 'react';

class App extends Component {
  state = {
    isDarkMode: false
  }

  toggleDarkMode = () => {
    const isDarkMode = !this.state.isDarkMode;

    this.setState({isDarkMode});
  }

  render() {
    return (
      <div
      id="hdc-app"
      className="relative"
      >
        <section className="p-4">
          <div className="mx-auto mb-4 container">
            <div className="w-1/2">
              <p className="mb-1 font-color--blue bold">Homes.com Match</p>
              <p className="mb-1 border-b-gray pb-1 font-serif font-2.5">Your personalized homes search tool</p>
              <p>A smarter way to find your ideal first or next home. Get matched with the best homes for you. Simply let us know what matters most and we’ll do the rest.</p>
            </div>
          </div>
          <div className="mx-auto mb-4 container">
            <p className="font-color--green">Thanks, your inquiry was successfully submitted.</p>
            <p className="font-color--red">Please specify a valid email address.</p>
            <div>
              <a href="/" className="mr-1">&lt; Previous</a>
              <a href="/nowhere">Next &gt;</a>
            </div>
          </div>
          <div className="mx-auto mb-4 border-gray p-1 container">
            <button className="mr-1 round-5 p-1/2 border-0 bg-blue font-color--white">Sample</button>
            <button className="round-5 p-1/2 border-0 bg-gray font-color--white">Sample</button>
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

        <section className="p-4 bg-gray-light">
          <div className="mx-auto mb-4 container">
            <div className="w-1/2">
              <p className="mb-1 font-color--blue bold">Homes.com Match</p>
              <p className="mb-1 border-b-gray pb-1 font-serif font-2.5">Your personalized homes search tool</p>
              <p>A smarter way to find your ideal first or next home. Get matched with the best homes for you. Simply let us know what matters most and we’ll do the rest.</p>
            </div>
          </div>
          <div className="mx-auto mb-4 container">
            <p className="font-color--green">Thanks, your inquiry was successfully submitted.</p>
            <p className="font-color--red">Please specify a valid email address.</p>
            <div>
              <a href="/" className="mr-1">&lt; Previous</a>
              <a href="/nowhere">Next &gt;</a>
            </div>
          </div>
          <div className="mx-auto mb-4 border-gray p-1 container">
            <button className="mr-1 round-5 p-1/2 border-0 bg-blue font-color--white">Sample</button>
            <button className="round-5 p-1/2 border-0 bg-gray font-color--white">Sample</button>
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

        <section className="p-4 dark-mode bg-gray">
          <div className="mx-auto mb-4 container">
            <div className="w-1/2">
              <p className="mb-1 bold">Homes.com Match</p>
              <p className="mb-1 border-b-white pb-1 font-color--white font-serif font-2.5">Your personalized homes search tool</p>
              <p>A smarter way to find your ideal first or next home. Get matched with the best homes for you. Simply let us know what matters most and we’ll do the rest.</p>
            </div>
          </div>
          <div className="mx-auto mb-4 container">
            <a href="/" className="mr-1">&lt; Previous</a>
            <a href="/nowhere">Next &gt;</a>
          </div>
          <div className="mx-auto mb-4 border-white p-1 container">
            <button className="mr-1 round-5 p-1/2 border-0 bg-white font-color--gray">Sample</button>
            <button className="round-5 p-1/2 border-white bg-gray font-color--white">Sample</button>
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

        <section className="p-4 dark-mode bg-blue">
          <div className="mx-auto mb-4 container">
            <div className="w-1/2">
              <p className="mb-1 bold">Homes.com Match</p>
              <p className="mb-1 border-b-white pb-1 font-color--white font-serif font-2.5">Your personalized homes search tool</p>
              <p>A smarter way to find your ideal first or next home. Get matched with the best homes for you. Simply let us know what matters most and we’ll do the rest.</p>
            </div>
          </div>
          <div className="mx-auto mb-4 container">
            <a href="/" className="mr-1">&lt; Previous</a>
            <a href="/nowhere">Next &gt;</a>
          </div>
          <div className="mx-auto mb-4 border-white p-1 container">
            <button className="mr-1 round-5 p-1/2 border-0 bg-white font-color--blue">Sample</button>
            <button className="round-5 p-1/2 border-white bg-blue font-color--white">Sample</button>
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

        <div className="mx-auto p-4 container hide">
          <div className="w-full">
            <div className="mb-1 bg-gray font-color--white text-center">Max content well of 784px</div>
            <div className="flex mb-1 font-color--white">
              <div className="mr-1 w-1/2 bg-gray text-center">1/2</div>
              <div className="w-1/2 bg-gray text-center">1/2</div>
            </div>
            <div className="flex mb-1 font-color--white">
              <div className="mr-1 w-1/3 bg-gray text-center">1/3</div>
              <div className="mr-1 w-1/3 bg-gray text-center">1/3</div>
              <div className="w-1/3 bg-gray text-center">1/3</div>
            </div>
            <div className="flex mb-1 font-color--white">
              <div className="mr-1 w-1/4 bg-gray text-center">1/4</div>
              <div className="mr-1 w-1/4 bg-gray text-center">1/4</div>
              <div className="mr-1 w-1/4 bg-gray text-center">1/4</div>
              <div className="w-1/4 bg-gray text-center">1/4</div>
            </div>
            <div className="flex font-color--white">
              <div className="mr-1 w-1/5 bg-gray text-center">1/5</div>
              <div className="mr-1 w-1/5 bg-gray text-center">1/5</div>
              <div className="mr-1 w-1/5 bg-gray text-center">1/5</div>
              <div className="mr-1 w-1/5 bg-gray text-center">1/5</div>
              <div className="w-1/5 bg-gray text-center">1/5</div>
            </div>
          </div>
        </div>

        <div className="mb-4 pr-4 pl-4 hide">
          <div className="mb-1 bg-blue font-color--white text-center">Responsive</div>
          <div className="flex mb-1 font-color--white">
            <div className="mr-1 w-1/2 bg-blue text-center">1/2</div>
            <div className="w-1/2 bg-blue text-center">1/2</div>
          </div>
          <div className="flex mb-1 font-color--white">
            <div className="mr-1 w-1/3 bg-blue text-center">1/3</div>
            <div className="mr-1 w-1/3 bg-blue text-center">1/3</div>
            <div className="w-1/3 bg-blue text-center">1/3</div>
          </div>
          <div className="flex mb-1 font-color--white">
            <div className="mr-1 w-1/4 bg-blue text-center">1/4</div>
            <div className="mr-1 w-1/4 bg-blue text-center">1/4</div>
            <div className="mr-1 w-1/4 bg-blue text-center">1/4</div>
            <div className="w-1/4 bg-blue text-center">1/4</div>
          </div>
          <div className="flex font-color--white">
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
