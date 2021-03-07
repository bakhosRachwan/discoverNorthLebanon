import React from 'react';
import './TourGuidePage.css';
import activities from '../../MockData/activities.json';
import TourGuideCard from '../../Components/TourGuideCard/TourGuideCard';
import EmailModal from '../../Components/EmailModal/EmailModal';
import { useTranslation } from 'react-i18next';

export default function TourGuidePage() {
  const { t } = useTranslation();

  return (
    <div className="allPage">
      <div className="tourGuideHeader">
        <div>
          <h1>{t('tourGuidePage.header')}</h1>
        </div>
        <div>
          <EmailModal />
        </div>
      </div>

      <div className="tourGuideCardContainer">
        {activities.map((activity) =>
          activity.tour_guides.map((guider) => {
            return (
              <TourGuideCard
                imgsrc={guider.image}
                name={guider.name}
                tags={guider.speciality_tags}
                description={guider.summary}
              />
            );
          })
        )}
      </div>
    </div>
  );
}