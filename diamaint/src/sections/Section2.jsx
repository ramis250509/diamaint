import React, { useMemo } from 'react';
import { Element } from 'react-scroll';
import jar1 from '../assets/section2/jar3.svg';
import jar2 from '../assets/section2/jar1.svg';
import jar3 from '../assets/section2/jar4.svg';
import sale from '../assets/section2/sale.svg';
import card from '../assets/section2/card.svg';
import bg from '../assets/section2/Mask Group.png';

const Section2 = React.memo(() => {
  const productsData = useMemo(() => [
    {
      id: 1,
      use: 'для нормальной кожи',
      desc: 'Увлажняющий мусс',
      img: jar1,
      price: 2750,
    },
    {
      id: 2,
      use: 'для нормальной кожи',
      desc: 'Увлажняющая маска',
      img: jar2,
      oldprice: 3750,
      price: 3600,
      sale: sale,
    },
    {
      id: 3,
      use: 'для нормальной кожи',
      desc: 'Гель для умывания', 
      img: jar3,
      price: 1650,
    },
  ], []);
  return (
    <section className="mt-15 flex justify-center relative z-10" id="target">
      <div>
        <h2 className="text-center z-10 font-montserrat font-extralight text-[70px] leading-[76.58px] tracking-normal text-[#757AA5] mb-20">
          Выбери свой продукт
        </h2>

        <div className="flex gap-8 items-end">
          {productsData.map((product) => (
            <div
              className="z-10 bg-[#F7F7FA] pt-[62px] pl-[20px] pr-[20px] pb-[18px]"
              key={product.id}
            >
              <img src={product.img} alt="product" loading="lazy" />
              <div className="ml-[18px]">
                <p className="font-[Montserrat] font-medium text-[12px] leading-[24px] tracking-[0.23em] text-[#A5A3B9]"
                >{product.use}</p>
                <p className="font-[Montserrat] font-normal text-[20px] leading-[27.2px] text-[#515076]"
                >{product.desc}</p>
                <div className="w-[64px] flex gap-[150px]">
                  <div className="flex gap-5">
                    {product.oldprice ? (
                      <p className="font-montserrat font-medium text-[18px] leading-[24.48px]line-through line-through text-[#515076] decoration-1.5">{product.oldprice.toLocaleString('ru-RU')}&nbsp;&#8381;</p>
                    ) : null}
                    <p className="font-[Montserrat] font-normal text-[20px] leading-[27.2px] text-[#515076] gap-1">{product.price.toLocaleString('ru-RU')}&nbsp;&#8381;</p>
                  </div>
                  <img src={card} alt="card" loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        className="absolute left-[0px] top-[-300px] rotate-y-165"
        src={bg}
        alt="background"
        loading="lazy"
      />
    </section>
  );
});

export default Section2;
