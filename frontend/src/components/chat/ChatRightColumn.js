import React from 'react';
function ChatRightColumn() {
  return (
    <div className="flex h-full min-h-[36rem] flex-1 flex-col p-7 mt-16">
      {/* 1st Row */}
      <div className="flex flex-1 flex-col">
        <div class="mb-2.5 flex items-center justify-between">
          <h2 class="flex items-center gap-2 text-lg font-semibold">
            For you in
            <span tabindex="0" role="button" class="inline-flex items-center gap-1 outline-none" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r9e:" data-state="closed">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em]">
                <path d="M18.75 9c0 3.735-6.75 12.75-6.75 12.75S5.25 12.735 5.25 9a6.75 6.75 0 0 1 13.5 0Z"></path>
                <path d="M12 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
              </svg>
              Lahore
            </span>
            <button data-variant="outline" data-loading="false" class="group group/button relative z-0 border inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none disabled:opacity-50 transition-colors text-center py-[.25em] text-balance text-foreground border-input data-[state=open]:border-current data-[state=active]:border-current hover:border-current group-hover/button:border-current text-xs min-h-[--button-sm-size] px-[--button-sm-px] leading-[1.125] bg-transparent" type="button">
              <span class="contents">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] ml-[-.2em] text-[1.5em]">
                  <path d="m9.52 18.286-3.549.82a1.143 1.143 0 0 1-1.4-1.114V6.623c0-.532.368-.994.886-1.113L9.52 4.57v13.715ZM9.52 18.286l4.96 1.143V5.714L9.52 4.571v13.715ZM19.429 17.377c0 .532-.368.994-.886 1.113l-4.063.939V5.714l3.549-.82c.716-.165 1.4.38 1.4 1.114v11.369Z"></path>
                </svg>
                Map
              </span>
            </button>
          </h2>
          <a data-variant="ghost" data-loading="false" class="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none disabled:opacity-50 transition-colors text-center py-[.25em] text-balance bg-transparent hover:bg-foreground/5 data-[state=open]:bg-foreground/5 data-[state=active]:border-current text-2xs min-h-[--button-xs-size] px-[--button-xs-px] leading-[1.125]" href="/explore">
            <span class="contents">Explore</span>
          </a>
        </div>
        {/* Crousal starts here */}
        <div class="scrollbar-hidden -my-0.5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-0.5 *:shrink-0 *:snap-start flex-1 *:basis-[calc((100%-2rem)/3)] *:max-w-[calc((100%-2rem)/3)]">
          <a class="relative flex items-center justify-center overflow-hidden rounded-2xl bg-foreground/5 leading-tight transition-transform duration-300 will-change-transform animate-in fade-in hover:-translate-y-0.5 h-[160px]" href="/restaurant/lahore-punjab/monal-lahore/re-8926HYLn">
            <img alt="" loading="lazy" width="320" height="320" decoding="async" data-nimg="1" class="object-cover absolute inset-0 size-full overflow-hidden rounded-[inherit]" srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/restaurants/417c/890c/3108/16cd/afa6/0f21/9d64/8d16 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/restaurants/417c/890c/3108/16cd/afa6/0f21/9d64/8d16 2x" src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/restaurants/417c/890c/3108/16cd/afa6/0f21/9d64/8d16" style={{ color: 'transparent' }} />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-b from-black/0 to-blackA-11 px-4 pb-4 pt-10 text-white [text-shadow:0_0_6px_rgb(0_0_0_/_30%)]">
              <h3 class="line-clamp-2 text-balance font-semibold">Monal Lahore</h3>
              <div class="flex gap-1 mt-0.5 text-xs *:truncate">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.0625em] text-[1.125em]">
                  <path d="M16.629 11.357c1.704 0 3.085-1.727 3.085-3.857s-1.381-3.857-3.085-3.857c-1.705 0-3.086 1.727-3.086 3.857s1.381 3.857 3.086 3.857Zm0 0v9M7.5 3.643v16.714m3.214-16.714v3.214a3.215 3.215 0 1 1-6.428 0V3.643"></path>
                </svg>
                <span class="capitalize">thai</span>
              </div>
            </div>
          </a>
          <a class="relative flex items-center justify-center overflow-hidden rounded-2xl bg-foreground/5 leading-tight transition-transform duration-300 will-change-transform animate-in fade-in hover:-translate-y-0.5 h-[160px]" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
            <img alt="" loading="lazy" width="320" height="320" decoding="async" data-nimg="1" class="object-cover absolute inset-0 size-full overflow-hidden rounded-[inherit]" srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 2x" src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782" style={{ color: 'transparent' }} />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-b from-black/0 to-blackA-11 px-4 pb-4 pt-10 text-white [text-shadow:0_0_6px_rgb(0_0_0_/_30%)]">
              <h3 class="line-clamp-2 text-balance font-semibold">Ambiance Boutique Art Hotel Lahore</h3>
              <div class="flex gap-1 mt-0.5 text-xs *:truncate">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.0625em] text-[1.125em]">
                  <path d="M5.5 11.188h13.875a1.5 1.5 0 0 1 1.5 1.5v3.562H4v-3.563a1.5 1.5 0 0 1 1.5-1.5ZM4 16.25v2.25M20.875 16.25v2.25"></path>
                  <path d="M19.188 11.188V6.125A1.125 1.125 0 0 0 18.063 5H6.813a1.125 1.125 0 0 0-1.125 1.125v5.063"></path>
                  <path d="M9.813 8.375h5.25a.75.75 0 0 1 .75.75v2.063h-6.75V9.124a.75.75 0 0 1 .75-.75Z"></path>
                </svg>
                <span class="capitalize">Hotel</span>
              </div>
            </div>
          </a>
          <a class="relative flex items-center justify-center overflow-hidden rounded-2xl bg-foreground/5 leading-tight transition-transform duration-300 will-change-transform animate-in fade-in hover:-translate-y-0.5 h-[160px]" href="/attraction/lahore-punjab/minar-e-pakistan/at-ayvNNXI0">
            <img alt="" loading="lazy" width="320" height="320" decoding="async" data-nimg="1" class="object-cover absolute inset-0 size-full overflow-hidden rounded-[inherit]" srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/attractions/43f6/e8f6/c321/48f8/8441/459b/904a/0d24 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/attractions/43f6/e8f6/c321/48f8/8441/459b/904a/0d24 2x" src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/attractions/43f6/e8f6/c321/48f8/8441/459b/904a/0d24" style={{ color: 'transparent' }} />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-b from-black/0 to-blackA-11 px-4 pb-4 pt-10 text-white [text-shadow:0_0_6px_rgb(0_0_0_/_30%)]">
              <h3 class="line-clamp-2 text-balance font-semibold">Monal Lahore</h3>
              <div class="flex gap-1 mt-0.5 text-xs *:truncate">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.0625em] text-[1.125em]">
                  <path d="M16.629 11.357c1.704 0 3.085-1.727 3.085-3.857s-1.381-3.857-3.085-3.857c-1.705 0-3.086 1.727-3.086 3.857s1.381 3.857 3.086 3.857Zm0 0v9M7.5 3.643v16.714m3.214-16.714v3.214a3.215 3.215 0 1 1-6.428 0V3.643"></path>
                </svg>
                <span class="capitalize">thai</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* 2nd Row */}
      <div className="flex flex-1 flex-col">
      <div class="mb-2.5 flex items-center justify-between">
          <h2 class="flex items-center gap-2 text-lg font-semibold">
            For you in
            <span tabindex="0" role="button" class="inline-flex items-center gap-1 outline-none" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r9e:" data-state="closed">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em]">
                <path d="M18.75 9c0 3.735-6.75 12.75-6.75 12.75S5.25 12.735 5.25 9a6.75 6.75 0 0 1 13.5 0Z"></path>
                <path d="M12 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
              </svg>
              Lahore
            </span>
            <button data-variant="outline" data-loading="false" class="group group/button relative z-0 border inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none disabled:opacity-50 transition-colors text-center py-[.25em] text-balance text-foreground border-input data-[state=open]:border-current data-[state=active]:border-current hover:border-current group-hover/button:border-current text-xs min-h-[--button-sm-size] px-[--button-sm-px] leading-[1.125] bg-transparent" type="button">
              <span class="contents">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] ml-[-.2em] text-[1.5em]">
                  <path d="m9.52 18.286-3.549.82a1.143 1.143 0 0 1-1.4-1.114V6.623c0-.532.368-.994.886-1.113L9.52 4.57v13.715ZM9.52 18.286l4.96 1.143V5.714L9.52 4.571v13.715ZM19.429 17.377c0 .532-.368.994-.886 1.113l-4.063.939V5.714l3.549-.82c.716-.165 1.4.38 1.4 1.114v11.369Z"></path>
                </svg>
                Map
              </span>
            </button>
          </h2>
          <a data-variant="ghost" data-loading="false" class="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none disabled:opacity-50 transition-colors text-center py-[.25em] text-balance bg-transparent hover:bg-foreground/5 data-[state=open]:bg-foreground/5 data-[state=active]:border-current text-2xs min-h-[--button-xs-size] px-[--button-xs-px] leading-[1.125]" href="/explore">
            <span class="contents">Explore</span>
          </a>
        </div>
        {/* Crousal starts here */}
        <div class="scrollbar-hidden -my-0.5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-0.5 *:shrink-0 *:snap-start flex-1 *:basis-[calc((100%-2rem)/3)] *:max-w-[calc((100%-2rem)/3)]">
          <a class="relative flex items-center justify-center overflow-hidden rounded-2xl bg-foreground/5 leading-tight transition-transform duration-300 will-change-transform animate-in fade-in hover:-translate-y-0.5 h-[160px]" href="/restaurant/lahore-punjab/monal-lahore/re-8926HYLn">
            <img alt="" loading="lazy" width="320" height="320" decoding="async" data-nimg="1" class="object-cover absolute inset-0 size-full overflow-hidden rounded-[inherit]" srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/restaurants/417c/890c/3108/16cd/afa6/0f21/9d64/8d16 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/restaurants/417c/890c/3108/16cd/afa6/0f21/9d64/8d16 2x" src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/restaurants/417c/890c/3108/16cd/afa6/0f21/9d64/8d16" style={{ color: 'transparent' }} />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-b from-black/0 to-blackA-11 px-4 pb-4 pt-10 text-white [text-shadow:0_0_6px_rgb(0_0_0_/_30%)]">
              <h3 class="line-clamp-2 text-balance font-semibold">Monal Lahore</h3>
              <div class="flex gap-1 mt-0.5 text-xs *:truncate">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.0625em] text-[1.125em]">
                  <path d="M16.629 11.357c1.704 0 3.085-1.727 3.085-3.857s-1.381-3.857-3.085-3.857c-1.705 0-3.086 1.727-3.086 3.857s1.381 3.857 3.086 3.857Zm0 0v9M7.5 3.643v16.714m3.214-16.714v3.214a3.215 3.215 0 1 1-6.428 0V3.643"></path>
                </svg>
                <span class="capitalize">thai</span>
              </div>
            </div>
          </a>
          <a class="relative flex items-center justify-center overflow-hidden rounded-2xl bg-foreground/5 leading-tight transition-transform duration-300 will-change-transform animate-in fade-in hover:-translate-y-0.5 h-[160px]" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
            <img alt="" loading="lazy" width="320" height="320" decoding="async" data-nimg="1" class="object-cover absolute inset-0 size-full overflow-hidden rounded-[inherit]" srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 2x" src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782" style={{ color: 'transparent' }} />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-b from-black/0 to-blackA-11 px-4 pb-4 pt-10 text-white [text-shadow:0_0_6px_rgb(0_0_0_/_30%)]">
              <h3 class="line-clamp-2 text-balance font-semibold">Ambiance Boutique Art Hotel Lahore</h3>
              <div class="flex gap-1 mt-0.5 text-xs *:truncate">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.0625em] text-[1.125em]">
                  <path d="M5.5 11.188h13.875a1.5 1.5 0 0 1 1.5 1.5v3.562H4v-3.563a1.5 1.5 0 0 1 1.5-1.5ZM4 16.25v2.25M20.875 16.25v2.25"></path>
                  <path d="M19.188 11.188V6.125A1.125 1.125 0 0 0 18.063 5H6.813a1.125 1.125 0 0 0-1.125 1.125v5.063"></path>
                  <path d="M9.813 8.375h5.25a.75.75 0 0 1 .75.75v2.063h-6.75V9.124a.75.75 0 0 1 .75-.75Z"></path>
                </svg>
                <span class="capitalize">Hotel</span>
              </div>
            </div>
          </a>
          <a class="relative flex items-center justify-center overflow-hidden rounded-2xl bg-foreground/5 leading-tight transition-transform duration-300 will-change-transform animate-in fade-in hover:-translate-y-0.5 h-[160px]" href="/attraction/lahore-punjab/minar-e-pakistan/at-ayvNNXI0">
            <img alt="" loading="lazy" width="320" height="320" decoding="async" data-nimg="1" class="object-cover absolute inset-0 size-full overflow-hidden rounded-[inherit]" srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/attractions/43f6/e8f6/c321/48f8/8441/459b/904a/0d24 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/attractions/43f6/e8f6/c321/48f8/8441/459b/904a/0d24 2x" src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/attractions/43f6/e8f6/c321/48f8/8441/459b/904a/0d24" style={{ color: 'transparent' }} />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-b from-black/0 to-blackA-11 px-4 pb-4 pt-10 text-white [text-shadow:0_0_6px_rgb(0_0_0_/_30%)]">
              <h3 class="line-clamp-2 text-balance font-semibold">Monal Lahore</h3>
              <div class="flex gap-1 mt-0.5 text-xs *:truncate">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.0625em] text-[1.125em]">
                  <path d="M16.629 11.357c1.704 0 3.085-1.727 3.085-3.857s-1.381-3.857-3.085-3.857c-1.705 0-3.086 1.727-3.086 3.857s1.381 3.857 3.086 3.857Zm0 0v9M7.5 3.643v16.714m3.214-16.714v3.214a3.215 3.215 0 1 1-6.428 0V3.643"></path>
                </svg>
                <span class="capitalize">thai</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* 3rd Row */}
      <div className="flex flex-1 flex-col">
      <div class="mb-2.5 flex items-center justify-between">
          <h2 class="flex items-center gap-2 text-lg font-semibold">
            For you in
            <span tabindex="0" role="button" class="inline-flex items-center gap-1 outline-none" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r9e:" data-state="closed">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em]">
                <path d="M18.75 9c0 3.735-6.75 12.75-6.75 12.75S5.25 12.735 5.25 9a6.75 6.75 0 0 1 13.5 0Z"></path>
                <path d="M12 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
              </svg>
              Lahore
            </span>
            <button data-variant="outline" data-loading="false" class="group group/button relative z-0 border inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none disabled:opacity-50 transition-colors text-center py-[.25em] text-balance text-foreground border-input data-[state=open]:border-current data-[state=active]:border-current hover:border-current group-hover/button:border-current text-xs min-h-[--button-sm-size] px-[--button-sm-px] leading-[1.125] bg-transparent" type="button">
              <span class="contents">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] ml-[-.2em] text-[1.5em]">
                  <path d="m9.52 18.286-3.549.82a1.143 1.143 0 0 1-1.4-1.114V6.623c0-.532.368-.994.886-1.113L9.52 4.57v13.715ZM9.52 18.286l4.96 1.143V5.714L9.52 4.571v13.715ZM19.429 17.377c0 .532-.368.994-.886 1.113l-4.063.939V5.714l3.549-.82c.716-.165 1.4.38 1.4 1.114v11.369Z"></path>
                </svg>
                Map
              </span>
            </button>
          </h2>
          <a data-variant="ghost" data-loading="false" class="group group/button relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none disabled:opacity-50 transition-colors text-center py-[.25em] text-balance bg-transparent hover:bg-foreground/5 data-[state=open]:bg-foreground/5 data-[state=active]:border-current text-2xs min-h-[--button-xs-size] px-[--button-xs-px] leading-[1.125]" href="/explore">
            <span class="contents">Explore</span>
          </a>
        </div>
        {/* Crousal starts here */}
        <div class="scrollbar-hidden -my-0.5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-0.5 *:shrink-0 *:snap-start flex-1 *:basis-[calc((100%-2rem)/3)] *:max-w-[calc((100%-2rem)/3)]">
          <a class="relative flex items-center justify-center overflow-hidden rounded-2xl bg-foreground/5 leading-tight transition-transform duration-300 will-change-transform animate-in fade-in hover:-translate-y-0.5 h-[160px]" href="/restaurant/lahore-punjab/monal-lahore/re-8926HYLn">
            <img alt="" loading="lazy" width="320" height="320" decoding="async" data-nimg="1" class="object-cover absolute inset-0 size-full overflow-hidden rounded-[inherit]" srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/restaurants/417c/890c/3108/16cd/afa6/0f21/9d64/8d16 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/restaurants/417c/890c/3108/16cd/afa6/0f21/9d64/8d16 2x" src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/restaurants/417c/890c/3108/16cd/afa6/0f21/9d64/8d16" style={{ color: 'transparent' }} />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-b from-black/0 to-blackA-11 px-4 pb-4 pt-10 text-white [text-shadow:0_0_6px_rgb(0_0_0_/_30%)]">
              <h3 class="line-clamp-2 text-balance font-semibold">Monal Lahore</h3>
              <div class="flex gap-1 mt-0.5 text-xs *:truncate">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.0625em] text-[1.125em]">
                  <path d="M16.629 11.357c1.704 0 3.085-1.727 3.085-3.857s-1.381-3.857-3.085-3.857c-1.705 0-3.086 1.727-3.086 3.857s1.381 3.857 3.086 3.857Zm0 0v9M7.5 3.643v16.714m3.214-16.714v3.214a3.215 3.215 0 1 1-6.428 0V3.643"></path>
                </svg>
                <span class="capitalize">thai</span>
              </div>
            </div>
          </a>
          <a class="relative flex items-center justify-center overflow-hidden rounded-2xl bg-foreground/5 leading-tight transition-transform duration-300 will-change-transform animate-in fade-in hover:-translate-y-0.5 h-[160px]" href="/hotel/lahore-punjab/ambiance-boutique-art-hotel-lahore/ho-QsqzdLOZ">
            <img alt="" loading="lazy" width="320" height="320" decoding="async" data-nimg="1" class="object-cover absolute inset-0 size-full overflow-hidden rounded-[inherit]" srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782 2x" src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/hotels/0337/82ac/cb5c/852f/783c/2c05/64d2/1782" style={{ color: 'transparent' }} />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-b from-black/0 to-blackA-11 px-4 pb-4 pt-10 text-white [text-shadow:0_0_6px_rgb(0_0_0_/_30%)]">
              <h3 class="line-clamp-2 text-balance font-semibold">Ambiance Boutique Art Hotel Lahore</h3>
              <div class="flex gap-1 mt-0.5 text-xs *:truncate">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.0625em] text-[1.125em]">
                  <path d="M5.5 11.188h13.875a1.5 1.5 0 0 1 1.5 1.5v3.562H4v-3.563a1.5 1.5 0 0 1 1.5-1.5ZM4 16.25v2.25M20.875 16.25v2.25"></path>
                  <path d="M19.188 11.188V6.125A1.125 1.125 0 0 0 18.063 5H6.813a1.125 1.125 0 0 0-1.125 1.125v5.063"></path>
                  <path d="M9.813 8.375h5.25a.75.75 0 0 1 .75.75v2.063h-6.75V9.124a.75.75 0 0 1 .75-.75Z"></path>
                </svg>
                <span class="capitalize">Hotel</span>
              </div>
            </div>
          </a>
          <a class="relative flex items-center justify-center overflow-hidden rounded-2xl bg-foreground/5 leading-tight transition-transform duration-300 will-change-transform animate-in fade-in hover:-translate-y-0.5 h-[160px]" href="/attraction/lahore-punjab/minar-e-pakistan/at-ayvNNXI0">
            <img alt="" loading="lazy" width="320" height="320" decoding="async" data-nimg="1" class="object-cover absolute inset-0 size-full overflow-hidden rounded-[inherit]" srcset="https://mindtrip.ai/cdn-cgi/image/w=384,format=webp,h=384,fit=cover/https://iorigin.mindtrip.ai/attractions/43f6/e8f6/c321/48f8/8441/459b/904a/0d24 1x, https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/attractions/43f6/e8f6/c321/48f8/8441/459b/904a/0d24 2x" src="https://mindtrip.ai/cdn-cgi/image/w=640,format=webp,h=640,fit=cover/https://iorigin.mindtrip.ai/attractions/43f6/e8f6/c321/48f8/8441/459b/904a/0d24" style={{ color: 'transparent' }} />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-b from-black/0 to-blackA-11 px-4 pb-4 pt-10 text-white [text-shadow:0_0_6px_rgb(0_0_0_/_30%)]">
              <h3 class="line-clamp-2 text-balance font-semibold">Monal Lahore</h3>
              <div class="flex gap-1 mt-0.5 text-xs *:truncate">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 transform-cpu size-[1em] relative top-[.0625em] text-[1.125em]">
                  <path d="M16.629 11.357c1.704 0 3.085-1.727 3.085-3.857s-1.381-3.857-3.085-3.857c-1.705 0-3.086 1.727-3.086 3.857s1.381 3.857 3.086 3.857Zm0 0v9M7.5 3.643v16.714m3.214-16.714v3.214a3.215 3.215 0 1 1-6.428 0V3.643"></path>
                </svg>
                <span class="capitalize">thai</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ChatRightColumn; 




