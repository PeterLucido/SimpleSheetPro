import Image from 'next/image'

const SheetComponent = () => {
  return (
    <div>
      <Image src="/public/sheetimage.png" alt="New Fillable Dive Sheet" width={800} height={800} />
    </div>
  )
}

export default SheetComponent