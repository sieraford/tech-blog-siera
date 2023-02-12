const User = require('./User');
const Post = require('./Post');

// users have many posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// each post belongs to a user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { User, Post };