import React from 'react';
import { Link } from 'react-router-dom';

import { ApiWineDetail } from '../Api/ApiWineList';


class WineDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    }
  }

  async componentWillMount () {
    try {
      const wineDetailResponse = await ApiWineDetail(this.props.match.params.id);
      this.setState({ datas: wineDetailResponse });
      console.log(wineDetailResponse);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
          {this.state.datas.map(data => (
            <ul>
              <li key={ data.abv }>{ data.abv }</li>
              <li key={ data.attenuation_level }>{ data.attenuation_level }</li>
              <li key={ data.boil_volume.unit }>{ data.boil_volume.unit } - { data.boil_volume.value }</li>
              <li key={ data.brewers_tips }>{ data.brewers_tips }</li>
              <li key={ data.contributed_by }>{ data.contributed_by }</li>
              <li key={ data.description }>{ data.description }</li>
              <li key={ data.ebc }>{ data.ebc }</li>
              <li key={ data.first_brewed }>{ data.first_brewed }</li>
              <li key={ data.key }>
                <ul>
                  {data.food_pairing.map(a => (
                    <li key={ a }>{ a }</li>
                  ))}
                </ul>
              </li>
              <li key={ data.ibu }>{ data.ibu }</li>
              <li key={ data.key }><img src={ data.image_url } /></li>
            </ul>
          ))}
      </div>
    );
  }
}

export default WineDetail;
