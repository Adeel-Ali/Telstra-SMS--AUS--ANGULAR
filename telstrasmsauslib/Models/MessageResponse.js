/**
 *TelstraSMSAUSLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 11/04/2016
 */
/**
 * Creates a instance of MessageResponse
 *
 * @constructor
 */

angular.module('TelstraSMSAUSLib').factory('MessageResponse',function(BaseModel){
	var MessageResponse = function(obj) {
		if(!obj){
						this.from = null;     
    				this.acknowledgedTimestamp = null;     
    				this.content = null;     
    													
		}
		else
		{
					this.from = obj.from;
    		this.acknowledgedTimestamp = obj.acknowledgedTimestamp;
    		this.content = obj.content;
 
		}
	}

	MessageResponse.prototype = new BaseModel();
	MessageResponse.prototype.constructor = MessageResponse;

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {string}
	 */
	MessageResponse.prototype.getFrom = function() {
		return this.from;
	};

	/**
	 * Setter for From
	 * 
	 * @param {string} value 
	 */
	MessageResponse.prototype.setFrom = function(value) {
		this.from = value;
	};

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {string}
	 */
	MessageResponse.prototype.getAcknowledgedTimestamp = function() {
		return this.acknowledgedTimestamp;
	};

	/**
	 * Setter for AcknowledgedTimestamp
	 * 
	 * @param {string} value 
	 */
	MessageResponse.prototype.setAcknowledgedTimestamp = function(value) {
		this.acknowledgedTimestamp = value;
	};

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {string}
	 */
	MessageResponse.prototype.getContent = function() {
		return this.content;
	};

	/**
	 * Setter for Content
	 * 
	 * @param {string} value 
	 */
	MessageResponse.prototype.setContent = function(value) {
		this.content = value;
	};

	
	return MessageResponse;
});