'use client'
import { useEffect } from 'react'
import React from 'react'
import { 
    TreePalm ,
    House,
    FlameKindling,
    Car,
    Tent,
    TentTree,
    Building2,
    Volleyball,
    Landmark,
    BookOpen,


} from 'lucide-react'

const categories = [
  { icon: <TreePalm />, label: "Beach" },
  { icon: <House />, label: "Houses" },
  { icon: <FlameKindling />, label: "Campings" },
  { icon: <Car />, label: "Camper Vans" },
  { icon: <Tent />, label: "Tents" },
  { icon: <TentTree />, label: "Mountain View" },
  { icon: <Building2 />, label: "City Center" },
  { icon: <Volleyball />, label: "Sport Center" },
  { icon: <Landmark />, label: "Near Landmarks" },
  { icon: <BookOpen />, label: "History Buildings" },
];


export default function Categories() {
  
    const containerRef = React.useRef<HTMLDivElement>(null);
    const isDown = React.useRef(false);
    const startX = React.useRef(0);
    const scrollLeft = React.useRef(0);

    
    // Horizontally scroll the categories when the user uses the mouse wheel
    const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if (containerRef.current && e.deltaY !== 0) {
            containerRef.current.scrollLeft += e.deltaY;
        }
    };


    // Drag to scroll the categories
    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if(!containerRef.current) return;
        isDown.current = true;
        startX.current = e.pageX - containerRef.current.offsetLeft;
        scrollLeft.current = containerRef.current.scrollLeft;
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    }

    const onMouseMove = (e: MouseEvent) => {
        if (!isDown.current || !containerRef.current) return;
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = x - startX.current;
        containerRef.current.scrollLeft = scrollLeft.current - walk;
    }

    const onMouseUp = () => {
        if (!containerRef.current) return;
        isDown.current = false;

        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
    }

    useEffect(() => {
        return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
        };
    }, []);


  return (
    <div 
        ref={containerRef}
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        className="pt-3 cursor-grab sm:cursor-pointer pb-6 flex items-center space-x-12 justify-between overflow-x-auto scrollbar-hide"
        
        >
        
        {categories.map(({ icon, label }) => (
            <div
                key={label}
                className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200 transition-all duration-300"
            >
                {icon}
                <span className="text-xs">{label}</span>
            </div>
            ))}
    </div>
  )
}
