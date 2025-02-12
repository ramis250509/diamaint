import React, { useRef } from 'react'
import flower from '../assets/section1/flower.svg'
import blueber from '../assets/section1/blueber.svg'
import leaves from '../assets/section1/leaves.png'
import { Link, Element} from 'react-scroll'

const Section1 = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const scrollToElement = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <section className=''>
        <div className='flex justify-center mt-[128px] relative'>
        <div className='w-[1280px]'>
            <h1 className='font-[Playfair Display] mb-[1733px] text-[230px]/[212.52px] text-[#515076] relative z-10'>Diamaint</h1>

            <div className='absolute top-[332px] left-[630px] z-10 flex flex-col'>
                <p className='text-style mb-4'>
                Diamaint — <span className="text-[#8888A8]  font-semibold">одуванчик</span> в переводе <br /> c ирландского
                </p>

                <p className='text-style mb-7'>Косметика, после которой вы уже <br /> никогда не будете прежней и обретёте <br /> новую жизнь, где наша продукция будет <br /> вашим верным спутником и <br /> помощником</p>

                <p className='text-style mb-20'>Используем всю силу природы, а так же <br /> новейшие разработки индустрии вкупе <br /> традиционными ирландскими <br /> рецептами для того, чтобы придать <br /> вашей коже здоровый и цветущий вид</p>

                <Link to='target' smooth={true} duration={500} className='inline-block text-center'>
                  <button onClick={scrollToElement} className='mb-19 hover:opacity-90 duration-300 cursor-pointer bg-[#515076] text-white font-[Montserrat] font-semibold text-[13px] leading-[15.85px] tracking-[0.32em] p-7 rounded-[100px]' >Выбрать продукт</button>
                </Link>

                <p className='text-style'>В основе — активные натуральные <br /> комплексы, витамины С, А, РР, В И Е, <br /> масла, воски, минералы и натуральные <br /> солнцезащитные компоненты. </p>
            </div>

            <img className='absolute top-[-240px] left-[335px] ' src={flower} alt="flower-img" />

            <img src={leaves}  alt="leaves-img" className='absolute top-[505px] left-[0px]'/>

            <p className='font-[Montserrat] font-normal text-[36px] leading-[47.76px] text-[#63678C] w-[320px] absolute top-[435px] left-[170px]'>Натуральная <br /> косметика <br /> c привкусом <br /> Ирландии</p>

            <p className="font-[Work_Sans] font-medium text-[16px] leading-[28.8px] tracking-[30%] text-[#888794] text-center absolute left-[1226px] top-[989px] w-[172px] h-[127px]"
            >Подбираем <br /> комплекс <br /> специально для <br /> вашего типа кожи</p>

            <p className="font-[Montserrat] font-light text-[36px] leading-[39.38px] text-[#757AA5] absolute left-[1039px] top-[1213px]">
            Diamaint — только <br /> натуральные <br /> ингридиенты
            </p>

            <p className="font-[Montserrat] font-normal text-[18px] leading-[30.6px] text-[#888794] absolute top-[1286px] left-[170px] z-10"      >
            Ингридиенты контролируются по <br /> качеству и происхождению. <br /> Большинство из них имеют <br /> органический сертификат Ecoсert и Soil <br /> Association. Сочетание компонентов в <br /> каждой линейке подобрано с учетом <br /> особенностей типа кожи.
            </p>

            <img className='absolute top-[777px] left-[160px]' src={blueber} alt="blueber" />
      </div>
        </div>
    </section>
  )
}

export default Section1
