import React from 'react';

import './cardExperience.scss';
import { cardExperience } from '@/Utils/CardExperience';

const CardExperience = (props: cardExperience) => {
  const { title, period, schoolcompany, description, position } = props;

  const classSide = position !== undefined ? position : 'left';
  return (
    <div className={`timeline ${classSide}`}>
      <div className="timeline-item">
        <h4 className="item-title">{title}</h4>
        <div className="item-nameperiod">
          <span className="item-period">{period}</span>
          <span className="item-small">{schoolcompany}</span>
        </div>
        <p className="item-description">{description}</p>
      </div>
    </div>
  );
};

export default CardExperience;
