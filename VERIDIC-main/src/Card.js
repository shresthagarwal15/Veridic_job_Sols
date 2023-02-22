import React from 'react'
import './Card.css'

export default function Card({pos}) {
  var escapeChars = { lt: '<', gt: '>', quot: '"', apos: "'", amp: '&' };
  var length=pos.excerpt.rendered.length;

function unescapeHTML(str) {//modified from underscore.string and string.js
    return str.replace(/\&([^;]+);/g, function(entity, entityCode) {
        var match;

        if ( entityCode in escapeChars) {
            return escapeChars[entityCode];
        } else if ( match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
            return String.fromCharCode(parseInt(match[1], 16));
        } else if ( match = entityCode.match(/^#(\d+)$/)) {
            return String.fromCharCode(~~match[1]);
        } else {
            return entity;
        }
    });
}

  return (
    <div className="card">
          <img src={pos.jetpack_featured_media_url} alt={pos.id} height="300px" width="100%"/>
          <div className="card-body">
            <h2 >{unescapeHTML(pos.title.rendered.substring(0,100)+"...")}</h2>

            {unescapeHTML(pos.excerpt.rendered.substring(3,length-6).substring(0,300)+"...")}
            
          </div>
        </div>
    )
  
}
