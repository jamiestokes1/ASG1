'use strict';

import logger from "../utils/logger.js";
import playlistStore from "../models/playlist-store.js";

const CollectionDetails = {
  createView(request, response) {
    logger.info("Collection Details page loading!");
    
    const viewData = {
      title: "Playlist App Collection Details",
      playlists: playlistStore.getAllPlaylists()

    };
    
    response.render('CollectionDetails', viewData);
  },
};

export default CollectionDetails;
