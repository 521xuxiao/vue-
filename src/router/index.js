import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'
import Donghua from '@/components/donghua'
import Donghua2 from '@/components/donghua2'
import Donghua3 from '@/components/donghua3'
import Donghua4 from '@/components/donghua4'
import Donghua5 from '@/components/donghua5'
import Donghua6 from '@/components/donghua6'
import Donghua7 from '@/components/donghua7'
import Donghua8 from '@/components/donghua8'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: HelloWorld,
            meta: {
                name: '许潇',
                keepAlive: true
            }
        },
        {
            path: '/HelloWorld',
            component: HelloWorld,
            meta: {
                name: '许潇',
                keepAlive: true
            }
        },
        {
            path: '/HelloWorld2',
            component: HelloWorld2,
            meta: {
                name: '许潇',
                keepAlive: true
            }
        },
        {
            path: '/Donghua',
            component: Donghua
        },
      {
        path: '/Donghua2',
        component: Donghua2
      },
      {
        path: '/Donghua3',
        component: Donghua3
      },
      {
        path: '/Donghua4',
        component: Donghua4
      },
      {
        path: '/Donghua5',
        component: Donghua5
      },
      {
        path: '/Donghua6',
        component: Donghua6
      },
      {
        path: '/Donghua7',
        component: Donghua7
      },
      {
        path: '/Donghua8',
        component: Donghua8
      }
    ]
})
