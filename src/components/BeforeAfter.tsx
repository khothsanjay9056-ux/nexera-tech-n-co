'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Slider } from '@/components/ui/slider'

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState([50])

  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4">
      <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl">
        {/* Before Image (Messy Spreadsheet) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition[0]}% 0 0)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="w-full h-full bg-white rounded-md md:rounded-lg shadow-inner p-2.5 sm:p-3 md:p-4 lg:p-6 overflow-hidden">
              <div className="space-y-1.5 sm:space-y-2">
                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 md:mb-3 text-red-600">BEFORE: The Chaos</div>
                {/* Simulated messy spreadsheet */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-0.5 sm:gap-1 md:gap-1.5 text-xs">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-gray-100 p-1 sm:p-1.5 md:p-2 border border-gray-300 text-[8px] sm:text-[10px] md:text-xs"
                      style={{ 
                        backgroundColor: i % 7 === 0 ? '#fee' : '#f9f9f9',
                        transform: i % 11 === 0 ? 'rotate(-2deg)' : 'none'
                      }}
                    >
                      {i % 3 === 0 ? '???' : `C${i}`}
                    </div>
                  ))}
                </div>
                <div className="mt-1.5 sm:mt-2 md:mt-3 text-[10px] sm:text-xs md:text-sm text-gray-600 space-y-0.5 sm:space-y-1">
                  <p>❌ Manual data entry</p>
                  <p>❌ Errors everywhere</p>
                  <p className="hidden sm:block">❌ Hours wasted weekly</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* After Image (Beautiful Dashboard) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition[0]}%)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="w-full h-full bg-white rounded-md md:rounded-lg shadow-inner p-2.5 sm:p-3 md:p-4 lg:p-6">
              <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 md:mb-3 text-green-600">AFTER: The Clarity</div>
                {/* Simulated beautiful dashboard */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2 md:gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-2.5 sm:p-3 md:p-4 rounded-md md:rounded-lg shadow-lg">
                    <div className="text-[10px] sm:text-xs md:text-sm opacity-90">Revenue</div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">$45K</div>
                    <div className="text-[8px] sm:text-[10px] md:text-xs opacity-75 mt-0.5">↑ 23%</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-2.5 sm:p-3 md:p-4 rounded-md md:rounded-lg shadow-lg hidden sm:block">
                    <div className="text-[10px] sm:text-xs md:text-sm opacity-90">Orders</div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">127</div>
                    <div className="text-[8px] sm:text-[10px] md:text-xs opacity-75 mt-0.5">↑ 12%</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-2.5 sm:p-3 md:p-4 rounded-md md:rounded-lg shadow-lg hidden sm:block">
                    <div className="text-[10px] sm:text-xs md:text-sm opacity-90">Customers</div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">892</div>
                    <div className="text-[8px] sm:text-[10px] md:text-xs opacity-75 mt-0.5">↑ 8%</div>
                  </div>
                </div>
                
                {/* Chart representation */}
                <div className="bg-gray-50 p-1.5 sm:p-2 md:p-3 rounded-md md:rounded-lg h-16 sm:h-24 md:h-32 lg:h-36 flex items-end justify-around gap-0.5 sm:gap-1 md:gap-1.5">
                  {[65, 85, 75, 95, 80, 90, 100].map((height, i) => (
                    <div 
                      key={i} 
                      className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t flex-1"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 space-y-0.5 sm:space-y-1">
                  <p>✅ Automated collection</p>
                  <p>✅ Real-time insights</p>
                  <p>✅ Save 10+ hours weekly</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-10"
          style={{ left: `${sliderPosition[0]}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing">
            <div className="flex gap-1">
              <div className="w-1 h-6 bg-gray-400 rounded" />
              <div className="w-1 h-6 bg-gray-400 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div className="mt-8 max-w-xl mx-auto px-4">
        <Slider
          value={sliderPosition}
          onValueChange={setSliderPosition}
          max={100}
          step={1}
          className="cursor-grab active:cursor-grabbing"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>← Drag to compare</span>
          <span>Drag to compare →</span>
        </div>
      </div>
    </div>
  )
}
