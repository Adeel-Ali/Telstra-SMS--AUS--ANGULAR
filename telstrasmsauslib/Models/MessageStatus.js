/**
 *TelstraSMSAUSLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 11/04/2016
 */
/**
 * Creates a instance of MessageStatus
 *
 * @constructor
 */

angular.module('TelstraSMSAUSLib').factory('MessageStatus',function(BaseModel){
	var MessageStatus = function(obj) {
		if(!obj){
						this.to = null;     
    				this.receivedTimestamp = null;     
    				this.sentTimestamp = null;     
    				this.status = null;     
    													
		}
		else
		{
					this.to = obj.to;
    		this.receivedTimestamp = obj.receivedTimestamp;
    		this.sentTimestamp = obj.sentTimestamp;
    		this.status = obj.status;
 
		}
	}

	MessageStatus.prototype = new BaseModel();
	MessageStatus.prototype.constructor = MessageStatus;

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {string}
	 */
	MessageStatus.prototype.getTo = function() {
		return this.to;
	};

	/**
	 * Setter for To
	 * 
	 * @param {string} value 
	 */
	MessageStatus.prototype.setTo = function(value) {
		this.to = value;
	};

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {string}
	 */
	MessageStatus.prototype.getReceivedTimestamp = function() {
		return this.receivedTimestamp;
	};

	/**
	 * Setter for ReceivedTimestamp
	 * 
	 * @param {string} value 
	 */
	MessageStatus.prototype.setReceivedTimestamp = function(value) {
		this.receivedTimestamp = value;
	};

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {string}
	 */
	MessageStatus.prototype.getSentTimestamp = function() {
		return this.sentTimestamp;
	};

	/**
	 * Setter for SentTimestamp
	 * 
	 * @param {string} value 
	 */
	MessageStatus.prototype.setSentTimestamp = function(value) {
		this.sentTimestamp = value;
	};

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {ResponseStatusEnum}
	 */
	MessageStatus.prototype.getStatus = function() {
		return this.status;
	};

	/**
	 * Setter for Status
	 * 
	 * @param {ResponseStatusEnum} value 
	 */
	MessageStatus.prototype.setStatus = function(value) {
		this.status = value;
	};

	
	return MessageStatus;
});