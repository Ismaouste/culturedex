import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const response = await axios.get(
      'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=liste-des-immeubles-proteges-au-titre-des-monuments-historiques&q=&facet=reg&facet=dpt_lettre&geofilter.polygon=(48.63107626999893%2C6.03776416041101)%2C(48.60384047940872%2C6.32066210962976)%2C(48.75707704000831%2C6.168226806895385)',
    );
    console.log(response);
    return response.data;
  }
}
