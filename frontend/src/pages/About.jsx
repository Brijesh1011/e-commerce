import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets';
function About() {
  return (
    <div>
      

       <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
       </div>

       <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis beatae sapiente cumque incidunt blanditiis culpa, non eos ut eius repellendus quia ducimus error ullam odit explicabo voluptatem, cupiditate quam corporis?
            Quam officiis,  eveniet vel excepturi. Nam, cumque. Eum quae itaque repellendus cumque iusto quod assumenda! Aut consequuntur ipsum, aliquid reiciendis odit porro minima molestiae recusandae et corporis amet libero necessitatibus quae?</p>
            <p> facilis , assumenda quam officiis molestias, deserunt eos hic voluptate quis ipsum repellendus inventore earum perferendis quaerat quos sit. Iure, delectus magnam! Maxime placeat cupiditate voluptatem culpa, delectus necessitatibus!
            Numquam reiciendis odit earum sint repellendus,  </p>

            <b className='text-gray-800'> Our Mission</b>
            <p>assumenda quam officiis molestias, deserunt eos hic voluptate quis ipsum repellendus inventore earum perferendis quaerat quos sit. Iure, delectus magnam! Maxime placeat cupiditate voluptatem culpa, delectus necessitatibus!
            Numquam reiciendis odit earum sint </p>

         </div>
       </div>
        
        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20 gap-2'>

       
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Quality Assurance:</b>
             <p className='text-gray-600'>assumenda quam officiis molestias, deserunt eos hic voluptate quis ipsum repellendus inventore earum perferendis quaerat quos sit</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Convenience:</b>
             <p className='text-gray-600'>assumenda quam officiis molestias, deserunt eos hic voluptate quis ipsum repellendus inventore earum perferendis quaerat quos sit</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Costomer Service:</b>
             <p className='text-gray-600'>assumenda quam officiis molestias, deserunt eos hic voluptate quis ipsum repellendus inventore earum perferendis quaerat quos sit</p>
          </div>
        </div>
    </div>
  )
}

export default About