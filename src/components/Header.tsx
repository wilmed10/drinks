import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore'

export default function Header() {

    const [searchFilters, setSearchFilter] = useState({
        ingredient: '',
        category: ''
    })
    
    const {pathname} =useLocation()

    const isHome = useMemo(() => pathname === '/', [pathname])

    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)
    const searchRecipes = useAppStore((state) => state.searchRecipes)

    useEffect(() => {
        fetchCategories()
    },[])

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearchFilter({
            ...searchFilters,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //validate
        if(Object.values(searchFilters).includes('')) {
            console.log('Todos los cmapos son obligatorios')
            return
        }

        //consult recipes
        searchRecipes(searchFilters)
    }

    return (
        <header className={ isHome ? 'bg-[url(./img/bg2.jpg)] bg-cover bg-center' : 'bg-slate-800'}>
            <div className="mx-auto container px-10 py-8">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="./img/logo.svg" alt="fondo" />
                    </div>
                    <nav className='flex gap-6 bg-[#122c34] p-3 rounded-lg'>
                        <NavLink 
                            to="/" 
                            className={({isActive}) => 
                                isActive? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                        }>Inicio</NavLink>
                        <NavLink 
                            to="/favorites" 
                            className={({isActive}) => 
                                isActive? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                        }>Favoritos</NavLink>
                    </nav>
                </div>
                { isHome && (
                    <form
                        className='md:w-1/2 2xl:w-1/3 bg-[#122c34] my-32 p-10 rounded-lg shadow space-y-6'
                        onSubmit={handleSubmit}
                    >
                        <div className='space-y-4'>
                            <label 
                                htmlFor="ingredient"
                                className='block text-white uppercase font-extrabold text-lg'
                            >Nombre o ingredientes</label>
                            <input 
                                id='ingredient'
                                type="text"
                                name='ingredient'
                                className='p-3 w-full rounded-lg focus:outline-none bg-white'
                                placeholder='Nombre o Ingrediente. Ej:...'
                                onChange={handleChange}
                                value={searchFilters.ingredient}
                            />
                        </div> 

                        <div className='space-y-4'>
                            <label 
                                htmlFor="category"
                                className='block text-white uppercase font-extrabold text-lg'
                            >CATEGORIA</label>

                            <select
                                id='category'
                                name='category'
                                className='p-3 w-full rounded-lg focus:outline-none bg-white'
                                onChange={handleChange}
                                value={searchFilters.category}
                            >
                                <option value="">---Seleccione---</option>
                                {categories.drinks.map(category => (
                                    <option
                                        key={category.strCategory}
                                        value={category.strCategory}
                                    >{category.strCategory}</option>
                                ))}
                            </select>
                        </div>

                        <input 
                            type="submit"
                            value='Buscar Recetas'
                            className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase'
                        />
                    </form>
                )}
            </div>
        </header>
    )
}
