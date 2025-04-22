import React, { useState } from 'react';

function ExploreLeftColumn() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Stays', 'Restaurants', 'Things to do', 'Guides', 'People'];

  return (
    <div className="pl-6 relative mx-auto max-w-[calc(var(--container-max)+(var(--px)*2))] px-[--px] pb-28 sm:min-h-[calc(100svh-var(--header-height))] sm:bg-background sm:pt-[calc(var(--header-height)+theme(space.10))] sm:transition-[transform,opacity] sm:duration-500 sm:ease-drawer split:min-h-0 split:pt-10 -mt-9 sm:mt-0">
      <div className="pt-6 mb-7 flex flex-col">
        <div class="mb-2 items-center gap-4">
          <span tabindex="0" role="button" class="flex w-fit min-w-0 items-center gap-1 text-lg font-semibold outline-none sm:text-2xl sm:tracking-tight" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rf7:" data-state="closed">
            <span class="truncate">Lahore</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] mt-[.25em] stroke-[2.75] text-[.625em]">
              <path d="m3.643 7.95 7.907 7.907a.617.617 0 0 0 .9 0l7.907-7.907"></path>
            </svg>
          </span>
        </div>
        {/* 2nd Row for Tabs */}
        <div class="group/overflow-nav relative mx-[calc(var(--px)*-1)] overflow-hidden py-2">
          <span class="pointer-events-none absolute inset-y-0 right-0 z-1 w-[--px] bg-gradient-to-r from-background/0 to-background"></span>
          <span class="pointer-events-none absolute inset-y-0 left-0 z-1 w-[--px] bg-gradient-to-l from-background/0 to-background"></span>
          <div class="scrollbar-hidden flex justify-between w-full overflow-x-auto scroll-smooth px-[--px] *:shrink-0 sm:gap-1" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                data-variant={activeTab === tab ? "primary" : "ghost"}
                data-loading="false"
                class={`group group/button relative z-0 ${
                  activeTab === tab ? 'border-black border-[0.5px]' : 'border border-transparent'
                } inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none transition-colors text-center py-[.25em] text-balance ${
                  activeTab === tab ? 'bg-black text-white hover:bg-black/90' : 'bg-transparent hover:bg-foreground/5'
                } text-sm min-h-[--button-sm-size] px-[--button-sm-px] leading-[1.125] flex-1`}
                aria-selected={activeTab === tab}
                type="button"
              >
                <span class="contents">{tab}</span>
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
        <h2 class="relative mb-4 mt-12 w-fit text-md font-semibold capitalize leading-tight first:mt-7 sm:mb-7 sm:text-lg"><span class="">Stays</span></h2>
        {/* container card grid */}
        <div className='@container/card-grid'>
          {/* card grid list*/}
          <ul class="grid grid-cols-2 gap-[--card-gap] [--card-gap:theme(space.8)_theme(space.4)] [--card-w:10rem] @lg/card-grid:gap-[theme(space.10)_theme(space.6)] @lg/card-grid:[--card-w:14rem]">
            <li>
              <div class="flex flex-1 flex-col @container/place-card">
                <div class="group relative w-full h-[300px] overflow-hidden rounded-2xl bg-red-500">
                  <div class="absolute inset-0 z-0 bg-blue-500">
                    <a aria-label="Ambiance Boutique Art Hotel Lahore" class="block w-full h-full bg-green-500" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
                      <div class="relative w-full h-full bg-yellow-500">
                        <ul class="flex w-full h-full overflow-x-auto snap-x snap-mandatory bg-purple-500">
                          <li class="relative w-full h-full flex-shrink-0 snap-start bg-pink-500">
                            <img 
                              alt="" 
                              loading="lazy" 
                              width="320" 
                              height="320" 
                              decoding="async" 
                              data-nimg="1" 
                              class="w-full h-full object-cover rounded-2xl" 
                              srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 2x" 
                              src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782"
                              style={{ color: 'transparent' }} 
                            />
                          </li>
                          <li class="relative w-full h-full flex-shrink-0 snap-start bg-pink-500">
                            <img 
                              alt="" 
                              loading="eager" 
                              width="320" 
                              height="320" 
                              decoding="async" 
                              data-nimg="1" 
                              class="w-full h-full object-cover rounded-2xl" 
                              srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59 2x" 
                              src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59"
                              style={{ color: 'transparent' }} 
                            />
                          </li>
                          <li aria-hidden="true" class="relative w-full shrink-0 snap-start pointer-events-none"></li>
                          <li aria-hidden="true" class="relative w-full shrink-0 snap-start pointer-events-none"></li>
                          <li aria-hidden="true" class="relative w-full shrink-0 snap-start pointer-events-none"></li>
                        </ul>
                        <div class="mx-auto overflow-hidden absolute bottom-4 left-1/2 z-1 -translate-x-1/2" style={{ '--dot-size': '6px', '--dot-space': '2.5px', maxWidth: '50px' }}>
                          <div class="m-[calc(var(--dot-space)*-1)] flex *:p-[--dot-space] justify-center">
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-12 origin-right"></span></span>
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-8 origin-left"></span></span>
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-8 origin-left"></span></span>
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-8 origin-left"></span></span>
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-8 origin-left"></span></span>
                          </div>
                        </div>
                        <div class="absolute left-4 top-1/2 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:hover)]:block !opacity-0">
                          <button data-variant="knockout" data-loading="false" class="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none transition-colors text-center py-[.25em] text-balance bg-background text-foreground hover:bg-background/95 disabled:opacity-30 text-xs min-h-[--button-sm-size] leading-[1.125] px-0 shrink-0 size-[--button-sm-size]" aria-label="Previous photo" type="button">
                            <span aria-hidden="true" class="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                            <span class="contents">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] text-[1.7em] ml-[-.125em]">
                                <path d="M16.052 20.357 8.145 12.45a.617.617 0 0 1 0-.9l7.907-7.907"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div class="absolute right-4 top-1/2 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:hover)]:block">
                          <button data-variant="knockout" data-loading="false" class="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none transition-colors text-center py-[.25em] text-balance bg-background text-foreground hover:bg-background/95 disabled:opacity-30 text-xs min-h-[--button-sm-size] leading-[1.125] px-0 shrink-0 size-[--button-sm-size]" aria-label="Next photo" type="button">
                            <span aria-hidden="true" class="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                            <span class="contents">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] text-[1.7em] mr-[-.125em]">
                                <path d="m7.95 3.643 7.907 7.907a.617.617 0 0 1 0 .9L7.95 20.357"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="absolute right-4 top-4 flex gap-2">
                    <button data-variant="none" data-loading="false" class="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none disabled:opacity-50 text-center py-[.25em] text-balance text-2xs min-h-[--button-xs-size] leading-[1.125] px-0 shrink-0 size-[--button-xs-size] transition-transform hover:scale-110 data-[loading=true]:text-whiteA-12" aria-label="Save" data-state="closed" type="button">
                      <span aria-hidden="true" class="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                      <span class="contents">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] mt-[.0625em] text-[2.5em] fill-blackA-7 stroke-whiteA-12">
                          <path d="m12.006 19.823-7.639-6.827c-4.151-4.097 1.951-11.963 7.639-5.6 5.687-6.363 11.762 1.53 7.638 5.6l-7.638 6.827Z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <a class="flex flex-col gap-1.5 pt-4 text-xs !leading-tight @[14rem]/place-card:text-sm @[21.375rem]/place-card:text-base min-h-[8.625em]" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
                  <div class="flex flex-1 flex-col">
                    <div class="flex items-baseline gap-2.5">
                      <div class="no-translate flex-1 text-pretty font-semibold line-clamp-2">Ambiance Boutique Art Hotel Lahore</div>
                      <span class="no-translate flex shrink-0 text-foreground [&>[data-slot=count]]:hidden @[16rem]/place-card:[&>[data-slot=count]]:inline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.125em] ml-[-2px] mr-[.125em] fill-current">
                          <path d="m12.63 4.401 2.044 4.128a.656.656 0 0 0 .527.385l4.513.669a.695.695 0 0 1 .386 1.196l-3.253 3.227a.682.682 0 0 0-.206.617l.785 4.538a.707.707 0 0 1-1.029.746l-4.063-2.147a.758.758 0 0 0-.668 0l-4.063 2.147a.707.707 0 0 1-1.029-.746l.785-4.59a.682.682 0 0 0-.206-.617L3.862 10.78a.695.695 0 0 1 .424-1.196l4.513-.669a.656.656 0 0 0 .527-.385L11.37 4.4a.695.695 0 0 1 1.26 0Z"></path>
                        </svg>
                        4.7
                        <span class="ml-[.125em] text-muted" data-slot="count">(202)</span>
                      </span>
                    </div>
                    <div class="flex gap-1 leading-tight mt-1 text-muted *:truncate">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.0625em] text-[1.125em]">
                        <path d="M5.5 11.188h13.875a1.5 1.5 0 0 1 1.5 1.5v3.562H4v-3.563a1.5 1.5 0 0 1 1.5-1.5ZM4 16.25v2.25M20.875 16.25v2.25"></path>
                        <path d="M19.188 11.188V6.125A1.125 1.125 0 0 0 18.063 5H6.813a1.125 1.125 0 0 0-1.125 1.125v5.063"></path>
                        <path d="M9.813 8.375h5.25a.75.75 0 0 1 .75.75v2.063h-6.75V9.124a.75.75 0 0 1 .75-.75Z"></path>
                      </svg>
                      <span class="capitalize">Hotel</span>
                    </div>
                    <div class="mt-1 truncate text-muted">Lahore, Punjab</div>
                    <div class="mt-auto pt-2 text-muted"></div>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div class="flex flex-1 flex-col @container/place-card">
                <div class="group relative w-full h-[300px] overflow-hidden rounded-2xl bg-red-500">
                  <div class="absolute inset-0 z-0 bg-blue-500">
                    <a aria-label="Ambiance Boutique Art Hotel Lahore" class="block w-full h-full bg-green-500" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
                      <div class="relative w-full h-full bg-yellow-500">
                        <ul class="flex w-full h-full overflow-x-auto snap-x snap-mandatory bg-purple-500">
                          <li class="relative w-full h-full flex-shrink-0 snap-start bg-pink-500">
                            <img 
                              alt="" 
                              loading="lazy" 
                              width="320" 
                              height="320" 
                              decoding="async" 
                              data-nimg="1" 
                              class="w-full h-full object-cover rounded-2xl" 
                              srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 2x" 
                              src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782"
                              style={{ color: 'transparent' }} 
                            />
                          </li>
                          <li class="relative w-full h-full flex-shrink-0 snap-start bg-pink-500">
                            <img 
                              alt="" 
                              loading="eager" 
                              width="320" 
                              height="320" 
                              decoding="async" 
                              data-nimg="1" 
                              class="w-full h-full object-cover rounded-2xl" 
                              srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59 2x" 
                              src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59"
                              style={{ color: 'transparent' }} 
                            />
                          </li>
                          <li aria-hidden="true" class="relative w-full shrink-0 snap-start pointer-events-none"></li>
                          <li aria-hidden="true" class="relative w-full shrink-0 snap-start pointer-events-none"></li>
                          <li aria-hidden="true" class="relative w-full shrink-0 snap-start pointer-events-none"></li>
                        </ul>
                        <div class="mx-auto overflow-hidden absolute bottom-4 left-1/2 z-1 -translate-x-1/2" style={{ '--dot-size': '6px', '--dot-space': '2.5px', maxWidth: '50px' }}>
                          <div class="m-[calc(var(--dot-space)*-1)] flex *:p-[--dot-space] justify-center">
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-12 origin-right"></span></span>
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-8 origin-left"></span></span>
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-8 origin-left"></span></span>
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-8 origin-left"></span></span>
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-8 origin-left"></span></span>
                          </div>
                        </div>
                        <div class="absolute left-4 top-1/2 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:hover)]:block !opacity-0">
                          <button data-variant="knockout" data-loading="false" class="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none transition-colors text-center py-[.25em] text-balance bg-background text-foreground hover:bg-background/95 disabled:opacity-30 text-xs min-h-[--button-sm-size] leading-[1.125] px-0 shrink-0 size-[--button-sm-size]" aria-label="Previous photo" type="button">
                            <span aria-hidden="true" class="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                            <span class="contents">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] text-[1.7em] ml-[-.125em]">
                                <path d="M16.052 20.357 8.145 12.45a.617.617 0 0 1 0-.9l7.907-7.907"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div class="absolute right-4 top-1/2 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:hover)]:block">
                          <button data-variant="knockout" data-loading="false" class="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none transition-colors text-center py-[.25em] text-balance bg-background text-foreground hover:bg-background/95 disabled:opacity-30 text-xs min-h-[--button-sm-size] leading-[1.125] px-0 shrink-0 size-[--button-sm-size]" aria-label="Next photo" type="button">
                            <span aria-hidden="true" class="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                            <span class="contents">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] text-[1.7em] mr-[-.125em]">
                                <path d="m7.95 3.643 7.907 7.907a.617.617 0 0 1 0 .9L7.95 20.357"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="absolute right-4 top-4 flex gap-2">
                    <button data-variant="none" data-loading="false" class="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none disabled:opacity-50 text-center py-[.25em] text-balance text-2xs min-h-[--button-xs-size] leading-[1.125] px-0 shrink-0 size-[--button-xs-size] transition-transform hover:scale-110 data-[loading=true]:text-whiteA-12" aria-label="Save" data-state="closed" type="button">
                      <span aria-hidden="true" class="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                      <span class="contents">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] mt-[.0625em] text-[2.5em] fill-blackA-7 stroke-whiteA-12">
                          <path d="m12.006 19.823-7.639-6.827c-4.151-4.097 1.951-11.963 7.639-5.6 5.687-6.363 11.762 1.53 7.638 5.6l-7.638 6.827Z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <a class="flex flex-col gap-1.5 pt-4 text-xs !leading-tight @[14rem]/place-card:text-sm @[21.375rem]/place-card:text-base min-h-[8.625em]" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
                  <div class="flex flex-1 flex-col">
                    <div class="flex items-baseline gap-2.5">
                      <div class="no-translate flex-1 text-pretty font-semibold line-clamp-2">Ambiance Boutique Art Hotel Lahore</div>
                      <span class="no-translate flex shrink-0 text-foreground [&>[data-slot=count]]:hidden @[16rem]/place-card:[&>[data-slot=count]]:inline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.125em] ml-[-2px] mr-[.125em] fill-current">
                          <path d="m12.63 4.401 2.044 4.128a.656.656 0 0 0 .527.385l4.513.669a.695.695 0 0 1 .386 1.196l-3.253 3.227a.682.682 0 0 0-.206.617l.785 4.538a.707.707 0 0 1-1.029.746l-4.063-2.147a.758.758 0 0 0-.668 0l-4.063 2.147a.707.707 0 0 1-1.029-.746l.785-4.59a.682.682 0 0 0-.206-.617L3.862 10.78a.695.695 0 0 1 .424-1.196l4.513-.669a.656.656 0 0 0 .527-.385L11.37 4.4a.695.695 0 0 1 1.26 0Z"></path>
                        </svg>
                        4.7
                        <span class="ml-[.125em] text-muted" data-slot="count">(202)</span>
                      </span>
                    </div>
                    <div class="flex gap-1 leading-tight mt-1 text-muted *:truncate">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.0625em] text-[1.125em]">
                        <path d="M5.5 11.188h13.875a1.5 1.5 0 0 1 1.5 1.5v3.562H4v-3.563a1.5 1.5 0 0 1 1.5-1.5ZM4 16.25v2.25M20.875 16.25v2.25"></path>
                        <path d="M19.188 11.188V6.125A1.125 1.125 0 0 0 18.063 5H6.813a1.125 1.125 0 0 0-1.125 1.125v5.063"></path>
                        <path d="M9.813 8.375h5.25a.75.75 0 0 1 .75.75v2.063h-6.75V9.124a.75.75 0 0 1 .75-.75Z"></path>
                      </svg>
                      <span class="capitalize">Hotel</span>
                    </div>
                    <div class="mt-1 truncate text-muted">Lahore, Punjab</div>
                    <div class="mt-auto pt-2 text-muted"></div>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div class="flex flex-1 flex-col @container/place-card">
                <div class="group relative w-full h-[300px] overflow-hidden rounded-2xl bg-red-500">
                  <div class="absolute inset-0 z-0 bg-blue-500">
                    <a aria-label="Ambiance Boutique Art Hotel Lahore" class="block w-full h-full bg-green-500" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
                      <div class="relative w-full h-full bg-yellow-500">
                        <ul class="flex w-full h-full overflow-x-auto snap-x snap-mandatory bg-purple-500">
                          <li class="relative w-full h-full flex-shrink-0 snap-start bg-pink-500">
                            <img 
                              alt="" 
                              loading="lazy" 
                              width="320" 
                              height="320" 
                              decoding="async" 
                              data-nimg="1" 
                              class="w-full h-full object-cover rounded-2xl" 
                              srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 2x" 
                              src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782"
                              style={{ color: 'transparent' }} 
                            />
                          </li>
                          <li class="relative w-full h-full flex-shrink-0 snap-start bg-pink-500">
                            <img 
                              alt="" 
                              loading="eager" 
                              width="320" 
                              height="320" 
                              decoding="async" 
                              data-nimg="1" 
                              class="w-full h-full object-cover rounded-2xl" 
                              srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59 2x" 
                              src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59"
                              style={{ color: 'transparent' }} 
                            />
                          </li>
                          <li aria-hidden="true" class="relative w-full shrink-0 snap-start pointer-events-none"></li>
                          <li aria-hidden="true" class="relative w-full shrink-0 snap-start pointer-events-none"></li>
                          <li aria-hidden="true" class="relative w-full shrink-0 snap-start pointer-events-none"></li>
                        </ul>
                        <div class="mx-auto overflow-hidden absolute bottom-4 left-1/2 z-1 -translate-x-1/2" style={{ '--dot-size': '6px', '--dot-space': '2.5px', maxWidth: '50px' }}>
                          <div class="m-[calc(var(--dot-space)*-1)] flex *:p-[--dot-space] justify-center">
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-12 origin-right"></span></span>
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-8 origin-left"></span></span>
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-8 origin-left"></span></span>
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-8 origin-left"></span></span>
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-8 origin-left"></span></span>
                          </div>
                        </div>
                        <div class="absolute left-4 top-1/2 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:hover)]:block !opacity-0">
                          <button data-variant="knockout" data-loading="false" class="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none transition-colors text-center py-[.25em] text-balance bg-background text-foreground hover:bg-background/95 disabled:opacity-30 text-xs min-h-[--button-sm-size] leading-[1.125] px-0 shrink-0 size-[--button-sm-size]" aria-label="Previous photo" type="button">
                            <span aria-hidden="true" class="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                            <span class="contents">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] text-[1.7em] ml-[-.125em]">
                                <path d="M16.052 20.357 8.145 12.45a.617.617 0 0 1 0-.9l7.907-7.907"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div class="absolute right-4 top-1/2 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:hover)]:block">
                          <button data-variant="knockout" data-loading="false" class="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none transition-colors text-center py-[.25em] text-balance bg-background text-foreground hover:bg-background/95 disabled:opacity-30 text-xs min-h-[--button-sm-size] leading-[1.125] px-0 shrink-0 size-[--button-sm-size]" aria-label="Next photo" type="button">
                            <span aria-hidden="true" class="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                            <span class="contents">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] text-[1.7em] mr-[-.125em]">
                                <path d="m7.95 3.643 7.907 7.907a.617.617 0 0 1 0 .9L7.95 20.357"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="absolute right-4 top-4 flex gap-2">
                    <button data-variant="none" data-loading="false" class="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none disabled:opacity-50 text-center py-[.25em] text-balance text-2xs min-h-[--button-xs-size] leading-[1.125] px-0 shrink-0 size-[--button-xs-size] transition-transform hover:scale-110 data-[loading=true]:text-whiteA-12" aria-label="Save" data-state="closed" type="button">
                      <span aria-hidden="true" class="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                      <span class="contents">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] mt-[.0625em] text-[2.5em] fill-blackA-7 stroke-whiteA-12">
                          <path d="m12.006 19.823-7.639-6.827c-4.151-4.097 1.951-11.963 7.639-5.6 5.687-6.363 11.762 1.53 7.638 5.6l-7.638 6.827Z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <a class="flex flex-col gap-1.5 pt-4 text-xs !leading-tight @[14rem]/place-card:text-sm @[21.375rem]/place-card:text-base min-h-[8.625em]" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
                  <div class="flex flex-1 flex-col">
                    <div class="flex items-baseline gap-2.5">
                      <div class="no-translate flex-1 text-pretty font-semibold line-clamp-2">Ambiance Boutique Art Hotel Lahore</div>
                      <span class="no-translate flex shrink-0 text-foreground [&>[data-slot=count]]:hidden @[16rem]/place-card:[&>[data-slot=count]]:inline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.125em] ml-[-2px] mr-[.125em] fill-current">
                          <path d="m12.63 4.401 2.044 4.128a.656.656 0 0 0 .527.385l4.513.669a.695.695 0 0 1 .386 1.196l-3.253 3.227a.682.682 0 0 0-.206.617l.785 4.538a.707.707 0 0 1-1.029.746l-4.063-2.147a.758.758 0 0 0-.668 0l-4.063 2.147a.707.707 0 0 1-1.029-.746l.785-4.59a.682.682 0 0 0-.206-.617L3.862 10.78a.695.695 0 0 1 .424-1.196l4.513-.669a.656.656 0 0 0 .527-.385L11.37 4.4a.695.695 0 0 1 1.26 0Z"></path>
                        </svg>
                        4.7
                        <span class="ml-[.125em] text-muted" data-slot="count">(202)</span>
                      </span>
                    </div>
                    <div class="flex gap-1 leading-tight mt-1 text-muted *:truncate">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.0625em] text-[1.125em]">
                        <path d="M5.5 11.188h13.875a1.5 1.5 0 0 1 1.5 1.5v3.562H4v-3.563a1.5 1.5 0 0 1 1.5-1.5ZM4 16.25v2.25M20.875 16.25v2.25"></path>
                        <path d="M19.188 11.188V6.125A1.125 1.125 0 0 0 18.063 5H6.813a1.125 1.125 0 0 0-1.125 1.125v5.063"></path>
                        <path d="M9.813 8.375h5.25a.75.75 0 0 1 .75.75v2.063h-6.75V9.124a.75.75 0 0 1 .75-.75Z"></path>
                      </svg>
                      <span class="capitalize">Hotel</span>
                    </div>
                    <div class="mt-1 truncate text-muted">Lahore, Punjab</div>
                    <div class="mt-auto pt-2 text-muted"></div>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div class="flex flex-1 flex-col @container/place-card">
                <div class="group relative w-full h-[300px] overflow-hidden rounded-2xl bg-red-500">
                  <div class="absolute inset-0 z-0 bg-blue-500">
                    <a aria-label="Ambiance Boutique Art Hotel Lahore" class="block w-full h-full bg-green-500" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
                      <div class="relative w-full h-full bg-yellow-500">
                        <ul class="flex w-full h-full overflow-x-auto snap-x snap-mandatory bg-purple-500">
                          <li class="relative w-full h-full flex-shrink-0 snap-start bg-pink-500">
                            <img 
                              alt="" 
                              loading="lazy" 
                              width="320" 
                              height="320" 
                              decoding="async" 
                              data-nimg="1" 
                              class="w-full h-full object-cover rounded-2xl" 
                              srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 2x" 
                              src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782"
                              style={{ color: 'transparent' }} 
                            />
                          </li>
                          <li class="relative w-full h-full flex-shrink-0 snap-start bg-pink-500">
                            <img 
                              alt="" 
                              loading="eager" 
                              width="320" 
                              height="320" 
                              decoding="async" 
                              data-nimg="1" 
                              class="w-full h-full object-cover rounded-2xl" 
                              srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59 2x" 
                              src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/6aaa/5b23/8763/dc4f/3df3/64dc/0f5c/1c59"
                              style={{ color: 'transparent' }} 
                            />
                          </li>
                          <li aria-hidden="true" class="relative w-full shrink-0 snap-start pointer-events-none"></li>
                          <li aria-hidden="true" class="relative w-full shrink-0 snap-start pointer-events-none"></li>
                          <li aria-hidden="true" class="relative w-full shrink-0 snap-start pointer-events-none"></li>
                        </ul>
                        <div class="mx-auto overflow-hidden absolute bottom-4 left-1/2 z-1 -translate-x-1/2" style={{ '--dot-size': '6px', '--dot-space': '2.5px', maxWidth: '50px' }}>
                          <div class="m-[calc(var(--dot-space)*-1)] flex *:p-[--dot-space] justify-center">
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-12 origin-right"></span></span>
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-8 origin-left"></span></span>
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-8 origin-left"></span></span>
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-8 origin-left"></span></span>
                            <span class="flex shrink-0"><span class="size-[--dot-size] rounded-full transition-[transform,color] bg-whiteA-8 origin-left"></span></span>
                          </div>
                        </div>
                        <div class="absolute left-4 top-1/2 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:hover)]:block !opacity-0">
                          <button data-variant="knockout" data-loading="false" class="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none transition-colors text-center py-[.25em] text-balance bg-background text-foreground hover:bg-background/95 disabled:opacity-30 text-xs min-h-[--button-sm-size] leading-[1.125] px-0 shrink-0 size-[--button-sm-size]" aria-label="Previous photo" type="button">
                            <span aria-hidden="true" class="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                            <span class="contents">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] text-[1.7em] ml-[-.125em]">
                                <path d="M16.052 20.357 8.145 12.45a.617.617 0 0 1 0-.9l7.907-7.907"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div class="absolute right-4 top-1/2 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:hover)]:block">
                          <button data-variant="knockout" data-loading="false" class="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none transition-colors text-center py-[.25em] text-balance bg-background text-foreground hover:bg-background/95 disabled:opacity-30 text-xs min-h-[--button-sm-size] leading-[1.125] px-0 shrink-0 size-[--button-sm-size]" aria-label="Next photo" type="button">
                            <span aria-hidden="true" class="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                            <span class="contents">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] text-[1.7em] mr-[-.125em]">
                                <path d="m7.95 3.643 7.907 7.907a.617.617 0 0 1 0 .9L7.95 20.357"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="absolute right-4 top-4 flex gap-2">
                    <button data-variant="none" data-loading="false" class="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none disabled:opacity-50 text-center py-[.25em] text-balance text-2xs min-h-[--button-xs-size] leading-[1.125] px-0 shrink-0 size-[--button-xs-size] transition-transform hover:scale-110 data-[loading=true]:text-whiteA-12" aria-label="Save" data-state="closed" type="button">
                      <span aria-hidden="true" class="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"></span>
                      <span class="contents">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] mt-[.0625em] text-[2.5em] fill-blackA-7 stroke-whiteA-12">
                          <path d="m12.006 19.823-7.639-6.827c-4.151-4.097 1.951-11.963 7.639-5.6 5.687-6.363 11.762 1.53 7.638 5.6l-7.638 6.827Z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <a class="flex flex-col gap-1.5 pt-4 text-xs !leading-tight @[14rem]/place-card:text-sm @[21.375rem]/place-card:text-base min-h-[8.625em]" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
                  <div class="flex flex-1 flex-col">
                    <div class="flex items-baseline gap-2.5">
                      <div class="no-translate flex-1 text-pretty font-semibold line-clamp-2">Ambiance Boutique Art Hotel Lahore</div>
                      <span class="no-translate flex shrink-0 text-foreground [&>[data-slot=count]]:hidden @[16rem]/place-card:[&>[data-slot=count]]:inline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.125em] ml-[-2px] mr-[.125em] fill-current">
                          <path d="m12.63 4.401 2.044 4.128a.656.656 0 0 0 .527.385l4.513.669a.695.695 0 0 1 .386 1.196l-3.253 3.227a.682.682 0 0 0-.206.617l.785 4.538a.707.707 0 0 1-1.029.746l-4.063-2.147a.758.758 0 0 0-.668 0l-4.063 2.147a.707.707 0 0 1-1.029-.746l.785-4.59a.682.682 0 0 0-.206-.617L3.862 10.78a.695.695 0 0 1 .424-1.196l4.513-.669a.656.656 0 0 0 .527-.385L11.37 4.4a.695.695 0 0 1 1.26 0Z"></path>
                        </svg>
                        4.7
                        <span class="ml-[.125em] text-muted" data-slot="count">(202)</span>
                      </span>
                    </div>
                    <div class="flex gap-1 leading-tight mt-1 text-muted *:truncate">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.0625em] text-[1.125em]">
                        <path d="M5.5 11.188h13.875a1.5 1.5 0 0 1 1.5 1.5v3.562H4v-3.563a1.5 1.5 0 0 1 1.5-1.5ZM4 16.25v2.25M20.875 16.25v2.25"></path>
                        <path d="M19.188 11.188V6.125A1.125 1.125 0 0 0 18.063 5H6.813a1.125 1.125 0 0 0-1.125 1.125v5.063"></path>
                        <path d="M9.813 8.375h5.25a.75.75 0 0 1 .75.75v2.063h-6.75V9.124a.75.75 0 0 1 .75-.75Z"></path>
                      </svg>
                      <span class="capitalize">Hotel</span>
                    </div>
                    <div class="mt-1 truncate text-muted">Lahore, Punjab</div>
                    <div class="mt-auto pt-2 text-muted"></div>
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