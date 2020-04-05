import React from 'react'

type Props = {
  title: string
  imgSrc: string
  className?: string
}

export const Highlight = ({ title, imgSrc, className }: Props) => (
  <section className={className}>
    <div className="container m-auto p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
      <div className="col-span-2 sm:col-span-2">
        <img src={imgSrc} className="rounded shadow-lg" />
      </div>

      <div className="col-span-1">
        <div className="text-3xl  mb-4">{title}</div>
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui maiores
          corporis eos dolorem animi cum ex laudantium esse? Nam hic nostrum
          delectus aut vel tempora corrupti itaque repellendus ad minima?
        </p>

        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui maiores
          corporis eos dolorem animi cum ex laudantium esse? Nam hic nostrum
          delectus aut vel tempora corrupti itaque repellendus ad minima?
        </p>
      </div>
    </div>
  </section>
)
