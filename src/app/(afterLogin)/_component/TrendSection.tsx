"use client"

import { usePathname } from 'next/navigation';
import style from './trendSection.module.css';
import Trend from "@/app/(afterLogin)/_component/Trend";

export default function TrendSection() {
    const pathname = usePathname();
    if (pathname === '/explore') return null; //탐색하기에서는 안나오게
    return (
        <div className={style.trendBg}>
            <div className={style.trend}>
                <h3>나를 위한 트렌드</h3>
                <Trend/>
                <Trend/>
                <Trend/>
                <Trend/>
            </div>
        </div>
    )
}