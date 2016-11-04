/**
 *TelstraSMSAUSLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 11/04/2016
 */
/**
 * Creates a instance of SendMessageResponse
 *
 * @constructor
 */

angular.module('TelstraSMSAUSLib').factory('SendMessageResponse',function(BaseModel){
	var SendMessageResponse = function(obj) {
		if(!obj){
						this.messageId = null;     
    													
		}
		else
		{
					this.messageId = obj.messageId;
 
		}
	}

	SendMessageResponse.prototype = new BaseModel();
	SendMessageResponse.prototype.constructor = SendMessageResponse;

		/**
	 * The unique id to identity the message sent.
	 *
	 * @return {string}
	 */
	SendMessageResponse.prototype.getMessageId = function() {
		return this.messageId;
	};

	/**
	 * Setter for MessageId
	 * 
	 * @param {string} value 
	 */
	SendMessageResponse.prototype.setMessageId = function(value) {
		this.messageId = value;
	};

	
	return SendMessageResponse;
});