

/**
 * Descibe this class
 * @author 
 * @version $Rev$
 * @requires OtherClassName
 */
(function($, $$, $$Log){
	/**
	 * @constructor
	 */
    //TODO : what is the useful static plugin that could be derived from Claypool.Logging?
	$.extend($, {
	    logger  : function(name){
	        return $$Log.getLogger(name);
	    }
	});
	
	var $log;// = $.logger("jQuery");
	
	$.extend($, {
	    debug  : function(){
	        $log = $log||$.logger("jQuery");
	        $log.debug.apply($log,arguments);
	        return this;
	    },
	    info  : function(){
	        $log = $log||$.logger("jQuery");
	        $log.info.apply($log,arguments);
	        return this;
	    },
	    warn  : function(){
	        $log = $log||$.logger("jQuery");
	        $log.warn.apply($log,arguments);
	        return this;
	    },
	    error  : function(){
	        $log = $log||$.logger("jQuery");
	        $log.error.apply($log,arguments);
	        return this;
	    },
	    exception  : function(){
	        $log = $log||$.logger("jQuery");
	        $log.exception.apply($log,arguments);
	        return this;
	    }
	});
	
	
})(  jQuery, Claypool, Claypool.Logging );