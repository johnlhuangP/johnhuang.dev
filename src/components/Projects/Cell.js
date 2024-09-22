import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link} target="_blank" rel="noreferrer">{data.title}</a>
        </h3>
        <p className="tools">{data.tools}</p>
        <time className="published">
          {dayjs(data.date).format('MMMM YYYY')} -{' '}
          {data.endDate ? dayjs(data.endDate).format('MMMM YYYY') : 'PRESENT'}
        </time>
      </header>
      <a href={data.link} target="_blank" rel="noreferrer" className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
