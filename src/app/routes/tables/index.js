export default {
  path: 'tables',
  component: require('../../components/common/Layout').default,

  childRoutes: [
    {
      path: 'partpricesearch-tables',
      getComponent(nextState, cb){
        System.import('./containers/PartPriceSearch').then((m)=> {
          cb(null, m.default)
        })
      }
    },
    {
      path: 'normal-tables',
      getComponent(nextState, cb){
        System.import('./containers/NormalTables').then((m)=> {
          cb(null, m.default)
        })
      }
    },
    {
      path: 'quotation-tables',
      getComponent(nextState, cb){
        System.import('./containers/Quotation').then((m)=> {
          cb(null, m.default)
        })
      }
    },
    {
      path: 'customerorder-tables',
      getComponent(nextState, cb){
        System.import('./containers/CustomerOrder').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
