module.exports = (req, res, next) => {
    res.render('contact', { title: 'Contact Us', home: false, project: false, about: false, contact: true });
}