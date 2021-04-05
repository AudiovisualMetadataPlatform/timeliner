import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import MetadataDisplay from '../MetadataDisplay/MetadataDisplay';
import MetadataEditor from '../MetadataEditor/MetadataEditor';
import ProjectMetadataDisplay from '../ProjectMetadataDisplay/ProjectMetadataDisplay';
import ProjectMetadataEditor from '../ProjectMetadataEditor/ProjectMetadataEditor';

import './Metadata.scss';
import MarkersMetadata from '../MarkerMetadata/MarkersMetadata';


const fix = num => parseInt((num || 0).toFixed(0), 10);

const getMarkers = (markers, min, max) =>
  Object.values(markers)
    .filter(marker => marker.time >= min && marker.time < max)
    .sort((a, b) => a.time - b.time);

const Metadata = props => {
  console.log("get current ranges 2");
  /*
  const rangesToShow = getCurrentRanges(props.currentTime, props.ranges);
  const lastRange = getLastRange(rangesToShow);

  // This is a future prop that we can offer to show more markers.
  // Not active at the moment as it requires a new interface.
  // Current set of markers are passed to the last item in the range.
  const min = props.showAllParentMarkers
    ? getMinStartTime(rangesToShow)
    : lastRange.startTime;
  const max = props.showAllParentMarkers
    ? getMaxEndTime(rangesToShow)
    : lastRange.endTime;
  */
  const markers = useMemo(()=>Object.values(props.markers), [props.markers]);

  return (
    <div className="metadata">
      <div className="metadata__project">
        <div className="metadata__project-content">
          {/* <Typography
            variant="subtitle1"
            color="textSecondary"
            style={{ marginBottom: 10 }}
          >
            Timeline information
          </Typography> */}
          <div className="metadata__content">
            {props.projectMetadataEditorOpen ? (
              <ProjectMetadataEditor
                manifestLabel={props.manifestLabel}
                manifestSummary={props.manifestSummary}
                onSave={props.onSaveProjectMetadata}
                onCancel={props.onCancelEditingProjectMetadata}
              />
            ) : (
              <ProjectMetadataDisplay
                manifestLabel={props.manifestLabel}
                manifestSummary={props.manifestSummary}
                homepage={props.homepage}
                homepageLabel={props.homepageLabel}
                noSourceLink={props.noSourceLink}
                onEditClick={props.onEditProjectMetadata}
                onSaveButtonClicked={props.onSaveButtonClicked}
                onEraseButtonClicked={props.onEraseButtonClicked}
                url={props.url}
                canSave={props.canSave}
                canErase={props.canErase}
                undoAll={props.undoAll}
                hasResource={props.hasResource}
              />
            )}
          </div>
        </div>
      </div>
      <div className="metadata__annotations">
        <div className="metadata__annotations-content">
          {/* <Typography
            variant="subtitle1"
            color="textSecondary"
            style={{ marginBottom: 10 }}
          >
            Annotations
          </Typography> */}
          {/* <div className="metadata__content">
            {rangesToShow.map((range, depth) =>
              range.id === props.rangeToEdit ? (
                <MetadataEditor
                  key={`metadata_editor-${range.id}`}
                  {...range}
                  colour={
                    range.colour || colours[(range.depth - 1) % colours.length]
                  }
                  onSave={props.onUpdateRange}
                  onDelete={props.onDeleteRange}
                  swatch={props.swatch}
                  onCancel={() => {
                    props.onEdit(null);
                  }}
                />
              ) : (
                <MetadataDisplay
                  key={`metadata_display-${range.id}`}
                  {...range}
                  inset={depth}
                  colour={
                    range.colour || colours[(range.depth - 1) % colours.length]
                  }
                  onEditClick={(selectedRange => () =>
                    props.onEdit(selectedRange.id))(range)}
                  blackAndWhiteMode={props.blackAndWhiteMode}
                />
              )
            )}
          </div> */}
          <div className="metadata__markers"> 
            <MarkersMetadata
              markers={markers}
              onSaveMarker={(marker, data) => props.updateMarker(marker.id, data)}
              onDeleteMarker={marker => props.deleteMarker(marker.id)}
              onGoToMarker={marker => props.setCurrentTime(marker.time)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Metadata.propTypes = {
  /** Current label of the manifest or range */
  manifestLabel: PropTypes.string.isRequired,
  /** Current summary of the manifest or range */
  manifestSummary: PropTypes.string.isRequired,
  homepage: PropTypes.string,
  homepageLabel: PropTypes.string,
  noSourceLink: PropTypes.bool,
  /** Total runtime of manifest */
  runTime: PropTypes.number.isRequired,
  /** Activates edit mode */
  onEdit: PropTypes.func,
  /** handles update range */
  onUpdateRange: PropTypes.func,
  /** Removes range */
  onDeleteRange: PropTypes.func,
  /** Cancels range edit */
  onCancelRangeEdit: PropTypes.func,
  /** Black and white mode */
  blackAndWhiteMode: PropTypes.bool,
  projectMetadataEditorOpen: PropTypes.bool,
  hasResource: PropTypes.bool,
  canSave: PropTypes.bool,
  canErase: PropTypes.bool,
  showAllParentMarkers: PropTypes.bool,
  onEditProjectMetadata: PropTypes.func,
  onSaveProjectMetadata: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  onEraseButtonClicked: PropTypes.func,
  deleteMarker: PropTypes.func,
  /** Audio url */
  url: PropTypes.string,
};

Metadata.defaultProps = {
  blackAndWhiteMode: false,
  showAllParentMarkers: false,
};

export default Metadata;
