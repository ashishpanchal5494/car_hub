"use client"

import {useEffect, useState} from "react"
import { CustomFilter, SearchBar, ShowMore } from './Component'
import Hero from './Component/Hero'
import {fatchCars} from "./Utils/index"
import CarCard from './Component/CarCard'
import { fuels, yearsOfProduction } from '@/constants';
import Image from "next/image"



export default  function Home() {
  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)

  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')

  const [limit, setLimit] = useState(10)

  const [year, setYear] = useState(2022)
  const [fuel, setFuel] = useState('')

  const [showImage, setShowImage] = useState(true)


  const getCars = async () => {
    setLoading(true)
    try {
      const results = await fatchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      }
      );
      setAllCars(results)
    } catch (error) {
      console.log(error)
    }
    setLoading(false);
  }

  useEffect(() => {
    getCars();
  }, [fuel, limit, model, year, manufacturer])



  return (
   <main className='overflow-hidden bg-slate-900' >
         <Hero
         setManufacturer={setManufacturer}
         setModel={setModel}
         />



    <div className='mt-12 padding-x padding-y
    max-width' id='discover'>
      <div className='home__text-container '>
        <h1 className='text-4xl font-extrabold '>Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>

      <div className='home__filters'>
    

        <div className='home__filter-container'>
         <CustomFilter title="fuel" options={fuels} setFilter={setFuel}/>
         <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear}/>
        </div>
      </div>

      { allCars.length > 0 ?
         (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => <CarCard car={car}/> )}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image 
                src="/loader.svg"
                alt="loader"
                width={50}
                height={50}
                className="object-container"/>
              </div>
            )}

            
            <ShowMore
            pageNumber={(limit) / 10 }
            isNext={limit > allCars.length}
            setLimit={setLimit}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results </h2>
            <p>{allCars?.massage}</p>
            </div>
        )
      }

    </div>
  
   
   </main>
  )
}
