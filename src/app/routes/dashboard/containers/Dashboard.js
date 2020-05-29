/**
 * Created by griga on 11/30/15.
 */

import React from 'react'

import BigBreadcrumbs from '../../../components/navigation/components/BigBreadcrumbs'

import BirdEyeWidget from '../components/BirdEyeWidget'


export default class Dashboard extends React.Component {
  render() {
    return (
      <div id="content">

        <div className="row">
          <BigBreadcrumbs items={['Dashboard', 'My Dashboard']}
                          className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
        </div>


          <div className="row">
            <article className="col-sm-12">


            </article>
          </div>


          <div className="row">

            <article className="col-sm-12 col-md-12 col-lg-6">



            </article>

            <article className="col-sm-12 col-md-12 col-lg-6">

              <BirdEyeWidget />

              <TodoWidget />

            </article>
          </div>
      </div>
    )
  }
}