import React, { useState } from 'react';

function ExploreLeftColumn() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Stays', 'Restaurants', 'Things to do', 'Guides', 'People'];

  return (
    <div className="pl-6 relative mx-auto max-w-[calc(var(--container-max)+(var(--px)*2))] px-[--px] pb-28 sm:min-h-[calc(100svh-var(--header-height))] sm:bg-gradient-to-br sm:from-gray-900 sm:via-gray-800 sm:to-blue-900 sm:pt-[calc(var(--header-height)+theme(space.10))] sm:transition-[transform,opacity] sm:duration-500 sm:ease-drawer split:min-h-0 split:pt-10 -mt-9 sm:mt-0">
      <div className="pt-6 mb-7 flex flex-col">
        <div class="mb-2 items-center gap-4">
          <span tabindex="0" role="button" class="flex w-fit min-w-0 items-center gap-1 text-lg font-semibold outline-none sm:text-2xl sm:tracking-tight" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rf7:" data-state="closed">
            <span class="truncate text-cyan-300">Lahore</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] mt-[.25em] stroke-[2.75] text-[.625em]">
              <path d="m3.643 7.95 7.907 7.907a.617.617 0 0 0 .9 0l7.907-7.907"></path>
            </svg>
          </span>
        </div>
        {/* 2nd Row for Tabs */}
        <div class="group/overflow-nav relative mx-[calc(var(--px)*-1)] overflow-hidden py-2">
          <span className="pointer-events-none absolute inset-y-0 right-0 z-1 w-[--px] bg-gradient-to-r from-transparent to-blue-900/80"></span>
          <span className="pointer-events-none absolute inset-y-0 left-0 z-1 w-[--px] bg-gradient-to-l from-transparent to-blue-900/80"></span>
          <div class="scrollbar-hidden flex justify-between w-full overflow-x-auto scroll-smooth px-[--px] *:shrink-0 sm:gap-1" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                data-variant={activeTab === tab ? "primary" : "ghost"}
                data-loading="false"
                className={`group group/button relative z-0 ${
                  activeTab === tab ? 'border-cyan-400 border-[1.5px] shadow-[0_0_8px_0_rgba(34,211,238,0.5)]' : 'border border-transparent'
                } inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none transition-colors text-center py-[.25em] text-balance ${
                  activeTab === tab ? 'bg-gradient-to-r from-cyan-500 via-blue-700 to-blue-900 text-white hover:bg-cyan-600' : 'bg-transparent hover:bg-cyan-900/30 text-cyan-300'
                } text-sm min-h-[--button-sm-size] px-[--button-sm-px] leading-[1.125] flex-1`}
                aria-selected={activeTab === tab}
                type="button"
              >
                <span className="contents">{tab}</span>
              </button>
            ))}
          </div>
          <div class="absolute inset-y-0 left-0 z-1 hidden opacity-0 transition-opacity group-hover/overflow-nav:opacity-100 [@media(hover:hover)]:block pointer-events-none !opacity-0">
            <button type="button" aria-label="Previous" class="flex h-full min-w-[--px] items-center bg-gradient-to-l from-background/0 via-background/90 via-30% to-background pl-1.5 pr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu">
                <path d="M16.052 20.357 8.145 12.45a.617.617 0 0 1 0-.9l7.907-7.907"></path>
              </svg>
            </button>
          </div>
          <div class="absolute inset-y-0 right-0 z-1 hidden opacity-0 transition-opacity group-hover/overflow-nav:opacity-100 [@media(hover:hover)]:block">
            <button type="button" aria-label="Next" class="flex h-full min-w-[--px] items-center bg-gradient-to-r from-background/0 via-background/90 via-30% to-background pl-4 pr-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu">
                <path d="m7.95 3.643 7.907 7.907a.617.617 0 0 1 0 .9L7.95 20.357"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* 3rd Row for Main Content */}
        <h2 className="relative mb-4 mt-12 w-fit text-md font-semibold capitalize leading-tight first:mt-7 sm:mb-7 sm:text-lg text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]"><span className="">Stays</span></h2>
        {/* container card grid */}
        <div className='@container/card-grid'>
          {/* card grid list*/}
          <ul className="grid grid-cols-2 gap-[--card-gap] [--card-gap:theme(space.8)_theme(space.4)] [--card-w:10rem] @lg/card-grid:gap-[theme(space.10)_theme(space.6)] @lg/card-grid:[--card-w:14rem]">
            <li>
              <div className="flex flex-1 flex-col @container/place-card">
                <div className="group relative w-full h-[300px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 shadow-[0_0_16px_0_rgba(34,211,238,0.15)]">
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900/60 via-cyan-900/40 to-transparent">
                    <a aria-label="Ambiance Boutique Art Hotel Lahore" className="block w-full h-full" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
                      <div className="relative w-full h-full">
                        <ul className="flex w-full h-full overflow-x-auto snap-x snap-mandatory">
                          <li className="relative w-full h-full flex-shrink-0 snap-start">
                            <img 
                              alt="" 
                              loading="lazy" 
                              width="320" 
                              height="320" 
                              decoding="async" 
                              data-nimg="1" 
                              className="w-full h-full object-cover rounded-2xl border-2 border-cyan-700/30 shadow-[0_0_12px_0_rgba(34,211,238,0.15)]" 
                              srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 2x" 
                              src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782"
                              style={{ color: 'transparent' }} 
                            />
                          </li>
                          <li className="relative w-full h-full flex-shrink-0 snap-start">
                            <img 
                              alt="" 
                              loading="eager" 
                              width="320" 
                              height="320" 
                              decoding="async" 
                              data-nimg="1" 
                              className="w-full h-full object-cover rounded-2xl border-2 border-cyan-700/30 shadow-[0_0_12px_0_rgba(34,211,238,0.15)]" 
                              srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59 2x" 
                              src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59"
                              style={{ color: 'transparent' }} 
                            />
                          </li>
                          <li aria-hidden="true" className="relative w-full shrink-0 snap-start pointer-events-none"></li>
                          <li aria-hidden="true" className="relative w-full shrink-0 snap-start pointer-events-none"></li>
                          <li aria-hidden="true" className="relative w-full shrink-0 snap-start pointer-events-none"></li>
                        </ul>
                        <div className="mx-auto overflow-hidden absolute bottom-4 left-1/2 z-1 -translate-x-1/2" style={{ '--dot-size': '6px', '--dot-space': '2.5px', maxWidth: '50px' }}>
                          <div className="m-[calc(var(--dot-space)*-1)] flex *:p-[--dot-space] justify-center">
                            <span className="flex shrink-0"><span className="size-[--dot-size] rounded-full transition-[transform,color] bg-cyan-400 origin-right"></span></span>
                            <span className="flex shrink-0"><span className="size-[--dot-size] rounded-full transition-[transform,color] bg-cyan-700 origin-left"></span></span>
                            <span className="flex shrink-0"><span className="size-[--dot-size] rounded-full transition-[transform,color] bg-cyan-700 origin-left"></span></span>
                            <span className="flex shrink-0"><span className="size-[--dot-size] rounded-full transition-[transform,color] bg-cyan-700 origin-left"></span></span>
                            <span className="flex shrink-0"><span className="size-[--dot-size] rounded-full transition-[transform,color] bg-cyan-700 origin-left"></span></span>
                          </div>
                        </div>
                        <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:hover)]:block !opacity-0">
                          <button data-variant="knockout" data-loading="false" className="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none transition-colors text-center py-[.25em] text-balance bg-background text-foreground hover:bg-background/95 disabled:opacity-30 text-xs min-h-[--button-sm-size] leading-[1.125] px-0 shrink-0 size-[--button-sm-size]" aria-label="Previous photo" type="button">
                            <span aria-hidden="true" className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                            <span className="contents">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="shrink-0 transform-cpu size-[1em] text-[1.7em] ml-[-.125em]">
                                <path d="M16.052 20.357 8.145 12.45a.617.617 0 0 1 0-.9l7.907-7.907"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:hover)]:block">
                          <button data-variant="knockout" data-loading="false" className="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none transition-colors text-center py-[.25em] text-balance bg-background text-foreground hover:bg-background/95 disabled:opacity-30 text-xs min-h-[--button-sm-size] leading-[1.125] px-0 shrink-0 size-[--button-sm-size]" aria-label="Next photo" type="button">
                            <span aria-hidden="true" className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                            <span className="contents">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="shrink-0 transform-cpu size-[1em] text-[1.7em] mr-[-.125em]">
                                <path d="m7.95 3.643 7.907 7.907a.617.617 0 0 1 0 .9L7.95 20.357"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="absolute right-4 top-4 flex gap-2">
                    <button data-variant="none" data-loading="false" className="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none disabled:opacity-50 text-center py-[.25em] text-balance text-2xs min-h-[--button-xs-size] leading-[1.125] px-0 shrink-0 size-[--button-xs-size] transition-transform hover:scale-110 data-[loading=true]:text-whiteA-12 bg-cyan-900/60 hover:bg-cyan-700/80 text-cyan-300 shadow-[0_0_8px_0_rgba(34,211,238,0.25)]" aria-label="Save" data-state="closed" type="button">
                      <span aria-hidden="true" className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                      <span className="contents">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transform-cpu size-[1em] mt-[.0625em] text-[2.5em] fill-cyan-700 stroke-cyan-300">
                          <path d="m12.006 19.823-7.639-6.827c-4.151-4.097 1.951-11.963 7.639-5.6 5.687-6.363 11.762 1.53 7.638 5.6l-7.638 6.827Z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <a className="flex flex-col gap-1.5 pt-4 text-xs !leading-tight @[14rem]/place-card:text-sm @[21.375rem]/place-card:text-base min-h-[8.625em] text-cyan-100" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-baseline gap-2.5">
                      <div className="no-translate flex-1 text-pretty font-semibold line-clamp-2 text-cyan-200 drop-shadow-[0_0_4px_rgba(34,211,238,0.5)]">Ambiance Boutique Art Hotel Lahore</div>
                      <span className="no-translate flex shrink-0 text-cyan-400 [&>[data-slot=count]]:hidden @[16rem]/place-card:[&>[data-slot=count]]:inline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transform-cpu size-[1em] relative top-[.125em] ml-[-2px] mr-[.125em] fill-current text-cyan-400">
                          <path d="m12.63 4.401 2.044 4.128a.656.656 0 0 0 .527.385l4.513.669a.695.695 0 0 1 .386 1.196l-3.253 3.227a.682.682 0 0 0-.206.617l.785 4.538a.707.707 0 0 1-1.029.746l-4.063-2.147a.758.758 0 0 0-.668 0l-4.063 2.147a.707.707 0 0 1-1.029-.746l.785-4.59a.682.682 0 0 0-.206-.617L3.862 10.78a.695.695 0 0 1 .424-1.196l4.513-.669a.656.656 0 0 0 .527-.385L11.37 4.4a.695.695 0 0 1 1.26 0Z"></path>
                        </svg>
                        4.7
                        <span className="ml-[.125em] text-cyan-700" data-slot="count">(202)</span>
                      </span>
                    </div>
                    <div className="flex gap-1 leading-tight mt-1 text-cyan-400 *:truncate">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transform-cpu size-[1em] relative top-[.0625em] text-[1.125em] text-cyan-400">
                        <path d="M5.5 11.188h13.875a1.5 1.5 0 0 1 1.5 1.5v3.562H4v-3.563a1.5 1.5 0 0 1 1.5-1.5ZM4 16.25v2.25M20.875 16.25v2.25"></path>
                        <path d="M19.188 11.188V6.125A1.125 1.125 0 0 0 18.063 5H6.813a1.125 1.125 0 0 0-1.125 1.125v5.063"></path>
                        <path d="M9.813 8.375h5.25a.75.75 0 0 1 .75.75v2.063h-6.75V9.124a.75.75 0 0 1 .75-.75Z"></path>
                      </svg>
                      <span className="capitalize">Hotel</span>
                    </div>
                    <div className="mt-1 truncate text-cyan-700">Lahore, Punjab</div>
                    <div className="mt-auto pt-2 text-cyan-800"></div>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="flex flex-1 flex-col @container/place-card">
                <div className="group relative w-full h-[300px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 shadow-[0_0_16px_0_rgba(34,211,238,0.15)]">
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900/60 via-cyan-900/40 to-transparent">
                    <a aria-label="Ambiance Boutique Art Hotel Lahore" className="block w-full h-full" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
                      <div className="relative w-full h-full">
                        <ul className="flex w-full h-full overflow-x-auto snap-x snap-mandatory">
                          <li className="relative w-full h-full flex-shrink-0 snap-start">
                            <img 
                              alt="" 
                              loading="lazy" 
                              width="320" 
                              height="320" 
                              decoding="async" 
                              data-nimg="1" 
                              className="w-full h-full object-cover rounded-2xl border-2 border-cyan-700/30 shadow-[0_0_12px_0_rgba(34,211,238,0.15)]" 
                              srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 2x" 
                              src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782"
                              style={{ color: 'transparent' }} 
                            />
                          </li>
                          <li className="relative w-full h-full flex-shrink-0 snap-start">
                            <img 
                              alt="" 
                              loading="eager" 
                              width="320" 
                              height="320" 
                              decoding="async" 
                              data-nimg="1" 
                              className="w-full h-full object-cover rounded-2xl border-2 border-cyan-700/30 shadow-[0_0_12px_0_rgba(34,211,238,0.15)]" 
                              srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59 2x" 
                              src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59"
                              style={{ color: 'transparent' }} 
                            />
                          </li>
                          <li aria-hidden="true" className="relative w-full shrink-0 snap-start pointer-events-none"></li>
                          <li aria-hidden="true" className="relative w-full shrink-0 snap-start pointer-events-none"></li>
                          <li aria-hidden="true" className="relative w-full shrink-0 snap-start pointer-events-none"></li>
                        </ul>
                        <div className="mx-auto overflow-hidden absolute bottom-4 left-1/2 z-1 -translate-x-1/2" style={{ '--dot-size': '6px', '--dot-space': '2.5px', maxWidth: '50px' }}>
                          <div className="m-[calc(var(--dot-space)*-1)] flex *:p-[--dot-space] justify-center">
                            <span className="flex shrink-0"><span className="size-[--dot-size] rounded-full transition-[transform,color] bg-cyan-400 origin-right"></span></span>
                            <span className="flex shrink-0"><span className="size-[--dot-size] rounded-full transition-[transform,color] bg-cyan-700 origin-left"></span></span>
                            <span className="flex shrink-0"><span className="size-[--dot-size] rounded-full transition-[transform,color] bg-cyan-700 origin-left"></span></span>
                            <span className="flex shrink-0"><span className="size-[--dot-size] rounded-full transition-[transform,color] bg-cyan-700 origin-left"></span></span>
                            <span className="flex shrink-0"><span className="size-[--dot-size] rounded-full transition-[transform,color] bg-cyan-700 origin-left"></span></span>
                          </div>
                        </div>
                        <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:hover)]:block !opacity-0">
                          <button data-variant="knockout" data-loading="false" className="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none transition-colors text-center py-[.25em] text-balance bg-background text-foreground hover:bg-background/95 disabled:opacity-30 text-xs min-h-[--button-sm-size] leading-[1.125] px-0 shrink-0 size-[--button-sm-size]" aria-label="Previous photo" type="button">
                            <span aria-hidden="true" className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                            <span className="contents">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="shrink-0 transform-cpu size-[1em] text-[1.7em] ml-[-.125em]">
                                <path d="M16.052 20.357 8.145 12.45a.617.617 0 0 1 0-.9l7.907-7.907"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:hover)]:block">
                          <button data-variant="knockout" data-loading="false" className="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none transition-colors text-center py-[.25em] text-balance bg-background text-foreground hover:bg-background/95 disabled:opacity-30 text-xs min-h-[--button-sm-size] leading-[1.125] px-0 shrink-0 size-[--button-sm-size]" aria-label="Next photo" type="button">
                            <span aria-hidden="true" className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                            <span className="contents">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="shrink-0 transform-cpu size-[1em] text-[1.7em] mr-[-.125em]">
                                <path d="m7.95 3.643 7.907 7.907a.617.617 0 0 1 0 .9L7.95 20.357"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="absolute right-4 top-4 flex gap-2">
                    <button data-variant="none" data-loading="false" className="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none disabled:opacity-50 text-center py-[.25em] text-balance text-2xs min-h-[--button-xs-size] leading-[1.125] px-0 shrink-0 size-[--button-xs-size] transition-transform hover:scale-110 data-[loading=true]:text-whiteA-12 bg-cyan-900/60 hover:bg-cyan-700/80 text-cyan-300 shadow-[0_0_8px_0_rgba(34,211,238,0.25)]" aria-label="Save" data-state="closed" type="button">
                      <span aria-hidden="true" className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                      <span className="contents">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transform-cpu size-[1em] mt-[.0625em] text-[2.5em] fill-cyan-700 stroke-cyan-300">
                          <path d="m12.006 19.823-7.639-6.827c-4.151-4.097 1.951-11.963 7.639-5.6 5.687-6.363 11.762 1.53 7.638 5.6l-7.638 6.827Z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <a className="flex flex-col gap-1.5 pt-4 text-xs !leading-tight @[14rem]/place-card:text-sm @[21.375rem]/place-card:text-base min-h-[8.625em] text-cyan-100" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-baseline gap-2.5">
                      <div className="no-translate flex-1 text-pretty font-semibold line-clamp-2 text-cyan-200 drop-shadow-[0_0_4px_rgba(34,211,238,0.5)]">Ambiance Boutique Art Hotel Lahore</div>
                      <span className="no-translate flex shrink-0 text-cyan-400 [&>[data-slot=count]]:hidden @[16rem]/place-card:[&>[data-slot=count]]:inline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transform-cpu size-[1em] relative top-[.125em] ml-[-2px] mr-[.125em] fill-current text-cyan-400">
                          <path d="m12.63 4.401 2.044 4.128a.656.656 0 0 0 .527.385l4.513.669a.695.695 0 0 1 .386 1.196l-3.253 3.227a.682.682 0 0 0-.206.617l.785 4.538a.707.707 0 0 1-1.029.746l-4.063-2.147a.758.758 0 0 0-.668 0l-4.063 2.147a.707.707 0 0 1-1.029-.746l.785-4.59a.682.682 0 0 0-.206-.617L3.862 10.78a.695.695 0 0 1 .424-1.196l4.513-.669a.656.656 0 0 0 .527-.385L11.37 4.4a.695.695 0 0 1 1.26 0Z"></path>
                        </svg>
                        4.7
                        <span className="ml-[.125em] text-cyan-700" data-slot="count">(202)</span>
                      </span>
                    </div>
                    <div className="flex gap-1 leading-tight mt-1 text-cyan-400 *:truncate">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transform-cpu size-[1em] relative top-[.0625em] text-[1.125em] text-cyan-400">
                        <path d="M5.5 11.188h13.875a1.5 1.5 0 0 1 1.5 1.5v3.562H4v-3.563a1.5 1.5 0 0 1 1.5-1.5ZM4 16.25v2.25M20.875 16.25v2.25"></path>
                        <path d="M19.188 11.188V6.125A1.125 1.125 0 0 0 18.063 5H6.813a1.125 1.125 0 0 0-1.125 1.125v5.063"></path>
                        <path d="M9.813 8.375h5.25a.75.75 0 0 1 .75.75v2.063h-6.75V9.124a.75.75 0 0 1 .75-.75Z"></path>
                      </svg>
                      <span className="capitalize">Hotel</span>
                    </div>
                    <div className="mt-1 truncate text-cyan-700">Lahore, Punjab</div>
                    <div className="mt-auto pt-2 text-cyan-800"></div>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="flex flex-1 flex-col @container/place-card">
                <div className="group relative w-full h-[300px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 shadow-[0_0_16px_0_rgba(34,211,238,0.15)]">
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900/60 via-cyan-900/40 to-transparent">
                    <a aria-label="Ambiance Boutique Art Hotel Lahore" className="block w-full h-full" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
                      <div className="relative w-full h-full">
                        <ul className="flex w-full h-full overflow-x-auto snap-x snap-mandatory">
                          <li className="relative w-full h-full flex-shrink-0 snap-start">
                            <img 
                              alt="" 
                              loading="lazy" 
                              width="320" 
                              height="320" 
                              decoding="async" 
                              data-nimg="1" 
                              className="w-full h-full object-cover rounded-2xl border-2 border-cyan-700/30 shadow-[0_0_12px_0_rgba(34,211,238,0.15)]" 
                              srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 2x" 
                              src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782"
                              style={{ color: 'transparent' }} 
                            />
                          </li>
                          <li className="relative w-full h-full flex-shrink-0 snap-start">
                            <img 
                              alt="" 
                              loading="eager" 
                              width="320" 
                              height="320" 
                              decoding="async" 
                              data-nimg="1" 
                              className="w-full h-full object-cover rounded-2xl border-2 border-cyan-700/30 shadow-[0_0_12px_0_rgba(34,211,238,0.15)]" 
                              srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59 2x" 
                              src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59"
                              style={{ color: 'transparent' }} 
                            />
                          </li>
                          <li aria-hidden="true" className="relative w-full shrink-0 snap-start pointer-events-none"></li>
                          <li aria-hidden="true" className="relative w-full shrink-0 snap-start pointer-events-none"></li>
                          <li aria-hidden="true" className="relative w-full shrink-0 snap-start pointer-events-none"></li>
                        </ul>
                        <div className="mx-auto overflow-hidden absolute bottom-4 left-1/2 z-1 -translate-x-1/2" style={{ '--dot-size': '6px', '--dot-space': '2.5px', maxWidth: '50px' }}>
                          <div className="m-[calc(var(--dot-space)*-1)] flex *:p-[--dot-space] justify-center">
                            <span className="flex shrink-0"><span className="size-[--dot-size] rounded-full transition-[transform,color] bg-cyan-400 origin-right"></span></span>
                            <span className="flex shrink-0"><span className="size-[--dot-size] rounded-full transition-[transform,color] bg-cyan-700 origin-left"></span></span>
                            <span className="flex shrink-0"><span className="size-[--dot-size] rounded-full transition-[transform,color] bg-cyan-700 origin-left"></span></span>
                            <span className="flex shrink-0"><span className="size-[--dot-size] rounded-full transition-[transform,color] bg-cyan-700 origin-left"></span></span>
                            <span className="flex shrink-0"><span className="size-[--dot-size] rounded-full transition-[transform,color] bg-cyan-700 origin-left"></span></span>
                          </div>
                        </div>
                        <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:hover)]:block !opacity-0">
                          <button data-variant="knockout" data-loading="false" className="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none transition-colors text-center py-[.25em] text-balance bg-background text-foreground hover:bg-background/95 disabled:opacity-30 text-xs min-h-[--button-sm-size] leading-[1.125] px-0 shrink-0 size-[--button-sm-size]" aria-label="Previous photo" type="button">
                            <span aria-hidden="true" className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                            <span className="contents">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="shrink-0 transform-cpu size-[1em] text-[1.7em] ml-[-.125em]">
                                <path d="M16.052 20.357 8.145 12.45a.617.617 0 0 1 0-.9l7.907-7.907"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:hover)]:block">
                          <button data-variant="knockout" data-loading="false" className="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none transition-colors text-center py-[.25em] text-balance bg-background text-foreground hover:bg-background/95 disabled:opacity-30 text-xs min-h-[--button-sm-size] leading-[1.125] px-0 shrink-0 size-[--button-sm-size]" aria-label="Next photo" type="button">
                            <span aria-hidden="true" className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                            <span className="contents">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="shrink-0 transform-cpu size-[1em] text-[1.7em] mr-[-.125em]">
                                <path d="m7.95 3.643 7.907 7.907a.617.617 0 0 1 0 .9L7.95 20.357"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="absolute right-4 top-4 flex gap-2">
                    <button data-variant="none" data-loading="false" className="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none disabled:opacity-50 text-center py-[.25em] text-balance text-2xs min-h-[--button-xs-size] leading-[1.125] px-0 shrink-0 size-[--button-xs-size] transition-transform hover:scale-110 data-[loading=true]:text-whiteA-12 bg-cyan-900/60 hover:bg-cyan-700/80 text-cyan-300 shadow-[0_0_8px_0_rgba(34,211,238,0.25)]" aria-label="Save" data-state="closed" type="button">
                      <span aria-hidden="true" className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                      <span className="contents">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transform-cpu size-[1em] mt-[.0625em] text-[2.5em] fill-cyan-700 stroke-cyan-300">
                          <path d="m12.006 19.823-7.639-6.827c-4.151-4.097 1.951-11.963 7.639-5.6 5.687-6.363 11.762 1.53 7.638 5.6l-7.638 6.827Z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <a className="flex flex-col gap-1.5 pt-4 text-xs !leading-tight @[14rem]/place-card:text-sm @[21.375rem]/place-card:text-base min-h-[8.625em] text-cyan-100" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-baseline gap-2.5">
                      <div className="no-translate flex-1 text-pretty font-semibold line-clamp-2 text-cyan-200 drop-shadow-[0_0_4px_rgba(34,211,238,0.5)]">Ambiance Boutique Art Hotel Lahore</div>
                      <span className="no-translate flex shrink-0 text-cyan-400 [&>[data-slot=count]]:hidden @[16rem]/place-card:[&>[data-slot=count]]:inline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transform-cpu size-[1em] relative top-[.125em] ml-[-2px] mr-[.125em] fill-current text-cyan-400">
                          <path d="m12.63 4.401 2.044 4.128a.656.656 0 0 0 .527.385l4.513.669a.695.695 0 0 1 .386 1.196l-3.253 3.227a.682.682 0 0 0-.206.617l.785 4.538a.707.707 0 0 1-1.029.746l-4.063-2.147a.758.758 0 0 0-.668 0l-4.063 2.147a.707.707 0 0 1-1.029-.746l.785-4.59a.682.682 0 0 0-.206-.617L3.862 10.78a.695.695 0 0 1 .424-1.196l4.513-.669a.656.656 0 0 0 .527-.385L11.37 4.4a.695.695 0 0 1 1.26 0Z"></path>
                        </svg>
                        4.7
                        <span className="ml-[.125em] text-cyan-700" data-slot="count">(202)</span>
                      </span>
                    </div>
                    <div className="flex gap-1 leading-tight mt-1 text-cyan-400 *:truncate">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transform-cpu size-[1em] relative top-[.0625em] text-[1.125em] text-cyan-400">
                        <path d="M5.5 11.188h13.875a1.5 1.5 0 0 1 1.5 1.5v3.562H4v-3.563a1.5 1.5 0 0 1 1.5-1.5ZM4 16.25v2.25M20.875 16.25v2.25"></path>
                        <path d="M19.188 11.188V6.125A1.125 1.125 0 0 0 18.063 5H6.813a1.125 1.125 0 0 0-1.125 1.125v5.063"></path>
                        <path d="M9.813 8.375h5.25a.75.75 0 0 1 .75.75v2.063h-6.75V9.124a.75.75 0 0 1 .75-.75Z"></path>
                      </svg>
                      <span className="capitalize">Hotel</span>
                    </div>
                    <div className="mt-1 truncate text-cyan-700">Lahore, Punjab</div>
                    <div className="mt-auto pt-2 text-cyan-800"></div>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExploreLeftColumn; 