import type { Product, Categorie } from '@/typings'
import AddButton from '../AddButton';
import ProductTable from './ProductTable';

async function getProducts() {
  const res = await fetch(`${process.env.BASE_URL}/api2/product`, { cache:'no-cache' })
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json()
  return data
}
async function getCategories() {
  const res = await fetch(`${process.env.BASE_URL}/api2/categorie`, { cache:'no-cache'  })
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json()
  return data
}

export default async function ProductPage() {
  const productsData =  getProducts()
  const categoriesData =  getCategories()
  const [products, categories]:[Product[], Categorie[]] = await Promise.all([productsData, categoriesData])

  return (
    <main>
      <h3>Product</h3>
      <ProductTable products={products} categories={categories}/>
    </main>
  )
}
