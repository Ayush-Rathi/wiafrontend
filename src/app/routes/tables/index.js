export default {
  path: 'tables',
  component: require('../../components/common/Layout').default,

  childRoutes: [
    
    {
      path: 'normal-tables',
      getComponent(nextState, cb){
        System.import('./containers/NormalTables').then((m)=> {
          cb(null, m.default)
        })
      }
    },
    {
      path: 'availability-tables',
      getComponent(nextState, cb){
        System.import('./containers/AvailabilityTables').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
