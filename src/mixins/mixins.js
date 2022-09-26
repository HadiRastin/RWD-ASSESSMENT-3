export default {
    computed: {
        comments() {
            const allComments = this.$store.getters["comments/comments"];
            var selectedComments = [];

            for (let i = 0; i < allComments.length; i++) {
                if (allComments[i]["posterID"] === this.id) {
                    selectedComments.push(allComments[i]);
                }
            }
            console.log("number of comments for this poster is:" + selectedComments.length);
            return selectedComments;

            
        },

        selectedPosters() {
            const posters = this.$store.getters["posters/posters"];
            const userID = this.$store.getters.userId;
            const selectedPoster = [];
            for (let i = 0; i < posters.length; i++) {
                if (posters[i].author === userID) {
                    selectedPoster.push(posters[i]);
                }
            }
            return selectedPoster;
        },

        selectedMessages() {
            const messages = this.$store.getters["messages/messages"];
            const userID = this.$store.getters.userId;
            console.log("userID is: " + userID);
            const selectedMessages = [];

            for (let i = 0; i < messages.length; i++) {
                if (messages[i].authourID === userID) {
                    selectedMessages.push(messages[i]);
                }
            }
            console.log(selectedMessages);
            return selectedMessages;
        },

        hasPosters() {
            return !this.isLoading && this.$store.getters["posters/hasPosters"];
        },

        hasMessages() {
            console.log(
                !this.isLoadingMessage && this.$store.getters["messages/hasMessages"]
            );
            return (
                !this.isLoadingMessage && this.$store.getters["messages/hasMessages"]
            );
        },
    }

}