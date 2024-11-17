import { createRouter, createWebHistory } from 'vue-router'
import LayoutComponent from '@/components/LayoutComponent.vue'
import GlavComponent from '@/components/GlavComponent.vue'
import ContactPage from '@/components/ContactPage.vue'
import AboutPage from '@/components/AboutPage.vue'
import MassivStud from '@/components/MassivStud.vue'
import BDTable from '@/components/BDTable.vue'
import BDTableRab from '@/components/BDTableRab.vue'
import WetherCity from '@/components/WetherCity.vue'
import KnigaBron from '@/components/KnigaBron.vue'
import CrudKniga from '@/components/CrudKniga.vue'
import LoginPage from '@/components/LoginPage.vue'
import RegistrPage from '@/components/RegistrPage.vue'
import AddItem from '@/components/AddItem.vue'
import AddItemRab from '@/components/AddItemRab.vue'
import EditItem from '@/components/EditItem.vue'
import EditItemRab from '@/components/EditItemRab.vue'
const routes = [
{
path: '/',
name: 'home',
components: {
default: GlavComponent,
header: LayoutComponent
}
},
{
path: '/contact',
name: 'contact',
components: {
default: ContactPage,
header: LayoutComponent
}
},
{
path: '/about',
name: 'about',
components: {
default: AboutPage,
header: LayoutComponent
}
},
{
    path: '/massiv',
    name: 'massiv',
    components: {
    default: MassivStud,
    header: LayoutComponent
    }
    },
    {
    path: '/bdtable',
    name: 'bdtable',
    components: {
    default: BDTable,
    header: LayoutComponent
    }
    },
    {
        path: '/bdtablerab',
        name: 'bdtablerab',
        components: {
        default: BDTableRab,
        header: LayoutComponent
        }
        },
    {
        path: '/wether',
        name: 'wether',
        components: {
        default: WetherCity,
        header: LayoutComponent
        }
        },
        {
            path: '/kniga',
            name: 'kniga',
            components: {
            default: KnigaBron,
            header: LayoutComponent
            }
            },
            {
                path: '/crud',
                name: 'crud',
                components: {
                default: CrudKniga,
                header: LayoutComponent
                }
                },
                {
                    path: '/login',
                    name: 'login',
                    components: {
                    default: LoginPage,
                    header: LayoutComponent
                    }
                    },
                    {
                        path: '/registr',
                        name: 'registr',
                        components: {
                        default: RegistrPage,
                        header: LayoutComponent
                        }
                        },
                        {
                            path: '/additem',
                            name: 'additem',
                            components: {
                            default: AddItem,
                            header: LayoutComponent
                            }
                            },
                            {
                                path: '/additemrab',
                                name: 'additemrab',
                                components: {
                                default: AddItemRab,
                                header: LayoutComponent
                                }
                                },
                            {
                                path: '/edititem/:id',
                                name: 'edititem',
                                components: {
                                default: EditItem,
                                header: LayoutComponent
                                }
                                },
                                {
                                    path: '/edititemrab/:id',
                                    name: 'edititemrab',
                                    components: {
                                    default: EditItemRab,
                                    header: LayoutComponent
                                    }
                                    }
                    
                          
]

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})

export default router